import { memo } from "react";
import type { Post as PostType } from "../types/post";
import "../styles/blog.css";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <article
      className={`post ${
        post.author === "Owen Ganza" ? "featured-post" : ""
      }`}
    >
      <h3 className="post-title">{post.title}</h3>

      <p className="post-author">By {post.author}</p>

      <p className="post-content">{post.content}</p>

      <p className="post-date">{post.date}</p>
    </article>
  );
}

export default memo(Post);