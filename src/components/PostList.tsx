import Post from './Post'
import type { Post as PostType } from '../types/post'

type PostListProps = {
  posts: PostType[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}

export default PostList
