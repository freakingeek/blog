import "./blog-post.css";
import Mdx from "@/app/components/Mdx";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (post) {
    return { title: post.title };
  }
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="blog-post">
      <time dateTime={post.publishedAt} className="blog-post__published-at">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>

      <h1 className="blog-post__title" title={post.title}>{post.title}</h1>

      <div className="blog-post__image-box">
        <img src={post.image} alt={post.title} className="blog-post__image" />
      </div>

      <Mdx code={post.body.code} className="blog-post__content" />
    </article>
  );
};

export default PostLayout;
