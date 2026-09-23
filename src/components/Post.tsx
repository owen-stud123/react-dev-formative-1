import type { Post as PostType } from '../types/post'

interface PostProps {
  post: PostType
}

function Post({ post }: PostProps) {
  const publishedDate = post.publishedAt ?? post.date ?? 'Unknown date'

  return (
    <article>
      <h2>{post.title}</h2>

      <p>By {post.author}</p>

      <p>{post.content}</p>

      {post.tags && post.tags.length > 0 && (
        <div>
          {post.tags.map((tag) => (
            <span key={`${post.id}-${tag}`}>#{tag} </span>
          ))}
        </div>
      )}

      {typeof post.likes === 'number' && <p>♥ {post.likes}</p>}

      <p>{publishedDate}</p>
    </article>
  )
}

export default Post;