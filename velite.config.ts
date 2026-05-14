// velite.config.ts
import { defineConfig, s } from 'velite'

export default defineConfig({
  root: 'content', // 記事ファイルを置くディレクトリ
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
      pattern: 'posts/**/*.md', // content/posts 以下のmdファイルを対象にする
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('posts'), // ファイル名などからURLスラッグを生成
          date: s.isodate(),
          description: s.string().max(200).optional(),
          content: s.markdown(), // MarkdownをHTMLに変換
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` }))
    }
  }
})