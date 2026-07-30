// velite.config.ts
import { defineConfig, s } from 'velite'

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.md',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('posts'),
          date: s.isodate(),
          description: s.string().max(200).optional(),
          // ↓ カバー画像用のフィールドを追加（optionalにしておくと画像がない記事があってもエラーになりません）
          cover: s.image().optional(),
          content: s.markdown(),
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` }))
    }
  }
})
