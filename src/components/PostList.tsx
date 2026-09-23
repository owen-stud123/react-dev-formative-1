import Post from './Post'
import type { Post as PostType } from '../types/post'

interface PostListProps {
  posts?: PostType[]
}

function PostList({ posts = [] }: PostListProps) {
  return (
    <main>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  )
}

export default PostList;