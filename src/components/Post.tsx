import type { Post as PostType } from '../types/post'

type PostProps = {
  post: PostType
}

const Post = ({ post }: PostProps) => {
  return (
    <article className="post-card">
      <div className="post-meta">
        <span className="post-author">{post.author}</span>
        <time>{post.publishedAt}</time>
      </div>

      <h2>{post.title}</h2>

      <p className="post-content">{post.content}</p>

      <div className="post-tags">
        {post.tags.map((tag) => (
          <span key={`${post.id}-${tag}`} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      <div className="post-actions">
        <span>♥ {post.likes}</span>
      </div>
    </article>
  )
}

export default Post
