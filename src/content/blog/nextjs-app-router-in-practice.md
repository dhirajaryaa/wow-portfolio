---
title: "Next.js App Router in Practice: What Actually Changed"
date: "2026-07-10"
description: "Six months of shipping App Router code in production — the rules that held up, the ones I quietly reverted, and the mental model that finally made it click."
tags: ["next.js", "react", "web development"]
published: true
---

I moved four production apps to the App Router over the course of six months. Most of
the migration was boring, which is the highest praise I can give an architectural shift.
A few things were not boring, and those are what this post is about.

## The model that made it click

Everything else follows from one sentence: **the server is the default, and the client
is the exception you pay for explicitly.**

In the Pages Router the boundary was a file — `_app.tsx` decided how much JavaScript a
visitor downloaded. In the App Router the boundary is a single `"use client"` line, and
it propagates down the tree from there. So the useful question is not "is this component
a Server Component?" but "what am I forcing across the boundary when I mark this one as
a client component?"

For me that turned into three habits:

- Leaf-first. Only the smallest interactive leaf gets `"use client"`. The wrapper stays
  on the server and streams the data around it.
- Data fetching next to the read. A Server Component can `await` its own data; there is
  no reason for a `useEffect` to exist just to fill a table.
- Server Actions for writes, plain forms as the fallback. A form with `action={serverAction}`
  works before hydration, which matters more than it sounds on a slow phone.

<Callout type="tip">
    The check that catches most of my bugs: open the Network tab, throttle to Slow 3G,
    and reload. If the page is interactive before the bundle finishes, you shipped a
    client component you did not need to.
</Callout>

## The rules that held up

### Fetch in parallel, always

This is the boring one, and it is still the biggest performance difference I have found
between the two routers. Sequential `await`s in a layout chain add up:

```tsx
// don't — three round trips, one after the other
const user = await getUser(id);
const posts = await getPosts(id);
const prefs = await getPreferences(id);

// do — all three start at the same time
const [user, posts, prefs] = await Promise.all([
  getUser(id),
  getPosts(id),
  getPreferences(id),
]);
```

### `loading.tsx` beats a spinner component

The boundary-based Suspense model means a route segment can ship its own pending state.
A `loading.tsx` next to `page.tsx` is a streaming boundary, not a wrapper — the shell
arrives immediately and the slow part fills in.

### Metadata is just a function

`generateMetadata` runs on the server at build time for static routes and per request
otherwise. Once you know that, dynamic OG images stop feeling like a hack:

```tsx
export async function generateMetadata({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: { type: "article", publishedTime: post.date, tags: post.tags },
  };
}
```

## The rules I reverted

### Streaming does not mean fast

RSC streaming moved my Largest Contentful Paint number and then took it right back. The
page got faster and then the *server* got slower, because I was rendering on demand for
traffic patterns that should have been cached. If a segment reads the same data for
every visitor, it wants `revalidate`, not a suspense boundary.

### A client component at the top is a lie

I shipped a `"use client"` wrapper around a whole dashboard once. The build was fine, the
bundle was not, and the directory structure quietly told me I had given up on the server
for that route. If the client boundary lands in a layout, everything below it is client
code, no matter how innocent each file looks.

### `useSearchParams` forces the whole page dynamic

One dropdown that reads a query param in a statically-rendered page is enough to opt the
entire route out of static rendering. Wrap the reader in its own tiny client component
and pass the value down as a prop instead.

## The checklist I actually use

| Rule | Why it matters |
| --- | --- |
| Push `"use client"` down to the leaf | Keeps the server component graph intact |
| `Promise.all` for sibling fetches | Removes serial round trips |
| `revalidate` over suspense for shared data | Streaming hides latency, caching removes it |
| `generateMetadata` over client-side title hacks | Correct tags, no layout shift |
| `error.tsx` beside every `page.tsx` | A failed fetch should not 500 the page |

None of this is exotic. The App Router just made the defaults more opinionated than the
Pages Router ever was, and the opinions are almost all correct.
