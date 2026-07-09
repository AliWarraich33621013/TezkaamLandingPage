import { BlogPost, postMetadata } from '@tezblogs/next'
import { notFound } from 'next/navigation'
import { tezblogs } from '@/lib/tezblogs'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return (await tezblogs.getSlugs()).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const post = await tezblogs.getPost((await params).slug)
  return post ? postMetadata({ post, siteUrl: 'https://tezkaam.tech' }) : {}
}

export default async function PostPage({ params }: Props) {
  const post = await tezblogs.getPost((await params).slug)
  if (!post) notFound()
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <BlogPost post={post} />
    </main>
  )
}