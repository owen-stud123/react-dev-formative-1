export interface Post {
  id: number
  title: string
  author: string
  content: string
  date?: string
  likes?: number
  tags?: string[]
  publishedAt?: string
}