import Post from "./Post";
import type { Post as PostType } from "../types/post";
import "../styles/blog.css";

const posts: PostType[] = [
  {
    id: 1,
    title: "Understanding React Components",
    author: "Owen Ganza",
    content:
      "React components help developers build reusable and maintainable user interfaces.",
    date: "September 23, 2026",
  },
  {
    id: 2,
    title: "Getting Started with TypeScript",
    author: "Jane Doe",
    content:
      "TypeScript adds static typing to JavaScript and helps developers catch errors earlier.",
    date: "September 22, 2026",
  },
  {
    id: 3,
    title: "Why Reusable Components Matter",
    author: "John Smith",
    content:
      "Reusable components make React applications easier to organize and maintain.",
    date: "September 21, 2026",
  },
];

function PostList() {
  return (
    <main className="post-list">
      <h2 className="post-list-title">Latest Posts</h2>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

export default PostList;