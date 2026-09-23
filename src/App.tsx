import Header from './components/Header'
import PostList from './components/PostList'
import type { Post } from './types/post'
import './styles/app.css'

const posts: Post[] = [
  {
    id: 1,
    title: 'Starting a new React project',
    author: 'Mia Chen',
    content:
      'Setting up the structure early makes scaling a UI much easier. Breaking the app into focused components keeps code readable and maintainable.',
    likes: 28,
    tags: ['react', 'components', 'frontend'],
    publishedAt: '2026-09-20',
  },
  {
    id: 2,
    title: 'Thoughts on design systems',
    author: 'Noah Patel',
    content:
      'Reusable patterns help teams move faster without losing visual consistency. A clear system of tokens, spacing, and typography makes product iteration smoother.',
    likes: 42,
    tags: ['design', 'ui', 'systems'],
    publishedAt: '2026-09-22',
  },
]

function App() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <div className="container">
          <PostList posts={posts} />
        </div>
      </main>
    </>
  )
}

export default App
