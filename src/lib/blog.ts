import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  published?: boolean;
}

const postsDir = path.join(process.cwd(), "src/content/blog");

function readPost(file: string): PostMeta | null {
  const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
  const { data } = matter(raw);
  return {
    slug: file.replace(/\.mdx?$/, ""),
    title: data.title ?? file,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    published: data.published ?? true,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((file) => /\.mdx?$/.test(file))
    .map(readPost)
    .filter((post) => post && post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostRaw(slug: string): string | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const mdPath = path.join(postsDir, `${slug}.md`);
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  if (fs.existsSync(mdPath)) return fs.readFileSync(mdPath, "utf-8");
  if (fs.existsSync(mdxPath)) return fs.readFileSync(mdxPath, "utf-8");
  return null;
}
