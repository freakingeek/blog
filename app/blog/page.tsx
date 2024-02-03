import type { Metadata } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostsGrid from "@/app/components/PostsGrid";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <div className="blog">
      <PostsGrid posts={posts} />
    </div>
  );
}
