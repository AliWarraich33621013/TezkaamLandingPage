import { createTezBlogsClient } from '@tezblogs/next'

export const tezblogs = createTezBlogsClient({
  apiKey: process.env.TEZBLOGS_API_KEY!,
  baseUrl: process.env.TEZBLOGS_API_URL!,
})