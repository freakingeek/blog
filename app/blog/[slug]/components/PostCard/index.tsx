import './PostCard.css';
import clsx from "clsx";
import Link from "next/link";

type PostCardProps = {
  className?: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

function PostCard({
  title,
  description,
  image,
  url,
  className,
}: PostCardProps) {
  const summary = `${description.split(' ').slice(0, 10).join(' ')} ...`

  return (
    <div className={clsx("post-card", className)}>
      <Link href={url} className="post-card__image-box">
        <img src={image} alt={title} className="post-card__image" />
      </Link>

      <Link href={url} className="post-card__title">
        {title}
      </Link>
      
      <span className="post-card__description">{summary}</span>
    </div>
  );
}

export default PostCard;
