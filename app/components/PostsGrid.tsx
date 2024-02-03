"use client";

import styled from "@emotion/styled";
import type { Post } from "@/.contentlayer/generated";
import PostCard from "@/app/blog/[slug]/components/PostCard";

const Section = styled.section`
  display: grid;
  grid-gap: 24px 16px;
  grid-auto-rows: 16px;
  grid-template-columns: repeat(3, 1fr);
`;

const Post = styled(PostCard)`
  &:nth-child(odd) {
    grid-row-end: span 9;
  }

  &:nth-child(even) {
    grid-row-end: span 12;
  }
`;

export default function Gallery({ posts }: { posts: Post[] }) {
  return (
    <Section>
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </Section>
  );
}
