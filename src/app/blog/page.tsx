import { BlogIndex } from '@tezblogs/next'
import { tezblogs } from '@/lib/tezblogs'

export default async function BlogPage() {
  const { docs } = await tezblogs.getPosts()
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <h1>Blog</h1>
      <BlogIndex posts={docs} />
    </main>
  )
}