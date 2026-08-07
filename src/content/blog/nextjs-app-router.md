---
title: "Building with Next.js App Router: What I Wish I Knew Earlier"
date: "2026-07-10"
description: "Practical lessons on Server Components, dynamic routes, MDX, and Turbopack from shipping a portfolio and real apps."
tags: ["next.js", "react", "web development"]
published: true
---

The App Router changed how I think about React. No more client-side-everything. After shipping a few apps with it, these are the lessons that cost me the most time to learn.

## Server Components first

The default in App Router is a Server Component — and that's a feature, not an accident. Fetching data, reading the filesystem, and keeping secrets in server code means no loading spinners, no waterfalls, and no exposed API keys.

**The mental model I use:** if it doesn't need `useState`, `useEffect`, or event handlers, keep it on the server.

## `params` is async now

In Next.js 15+, `params` in pages is a Promise. The old days of `params.slug` are gone:

```ts
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // ...
}
```

## Dynamic imports for content

For a blog or docs site, keep your content as `.md` / `.mdx` files in a content folder and read them at build time. Combine `generateStaticParams` with a filesystem reader for the list and a dynamic import for each post:

```ts
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
```

This gives you a fully static site, instant navigation, and SEO without a CMS.

## `next/image` vs plain `img`

`next/image` gives you optimization and layout stability for free, but it requires known dimensions or `fill` inside a sized container. For markdown body images where you don't control dimensions, a plain `img` with `w-full h-auto` is perfectly fine.

## Turbopack is fast — lean into it

Dev feels instant. If something behaves differently than webpack, check whether you're relying on an old webpack-specific behavior before assuming a bug.

## Final advice

Read the Next.js docs once, cover to cover. Then build something boring — a blog, a landing page — and only then reach for the advanced features like middleware, caching strategies, or server actions. The basics, done well, will take you 90% of the way.
