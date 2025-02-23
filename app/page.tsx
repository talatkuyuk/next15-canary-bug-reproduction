import type { Metadata } from "next";
import Link from "next/link";

import { getPostInformation, getMarkdownFiles } from "@/utils/file";
import type { Post } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Articles() {
  const files = getMarkdownFiles();

  const posts = files
    .map(getPostInformation)
    .filter((post): post is Post => post !== undefined)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div>
      <h1>Articles</h1>
      <ul className="articles">
        {posts.map((post) => (
          <li key={post.title}>
            <strong>
              <Link href={`/${post.slug}`}>{post.title}</Link>
            </strong>
            <p>
              <span>{String(post.date)}, </span>
              <span>
                written by <strong>{post.author}</strong>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
