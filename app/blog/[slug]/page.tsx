// Gemini 100%使用 ここに関しては私の敗北.......
export const metadata = {
  title: "Blog | Tsukune Server",
  description: "Tsukune ServerのBlogページです。",
};

import { posts } from "content";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShareButtons from "./ShareButtons"; // 🍏 迷子にならない正しい相対パス！

// 静的エクスポート用: ビルド時に全slugを列挙する
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24 px-4">
        {/* ナビゲーション（ブログ一覧へ戻る） */}
        <div className="mx-auto max-w-3xl mt-16 mb-8">
          <Link
            href="/blog"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            ← BACK TO BLOG
          </Link>
        </div>

        {/* 記事のメインコンテナ（読むことに集中できる max-w-3xl） */}
        <article className="mx-auto max-w-3xl rounded-lg border border-zinc-700 bg-zinc-800/30 p-6 md:p-10 shadow-xl">
          {/* 記事ヘッダー：メタ情報 */}
          <header className="mb-8 border-b border-zinc-700/50 pb-6">
            <time className="block text-sm font-mono text-zinc-500 mb-2">
              {post.date}
            </time>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white font-sans leading-tight">
              {post.title}
            </h1>
          </header>

          {/* 記事本文：VeliteのHTMLコンテンツ */}
          <div
            className="prose prose-invert prose-zinc max-w-none text-zinc-300 font-sans leading-relaxed
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-2xl prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-2 prose-h2:mt-10
              prose-h3:text-xl prose-h3:mt-6
              prose-p:my-4 prose-p:text-base prose-p:font-light
              prose-a:text-white prose-a:underline hover:prose-a:text-zinc-300
              prose-code:text-zinc-200 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
              prose-pre:bg-zinc-900/80 prose-pre:border prose-pre:border-zinc-800 prose-pre:p-4 prose-pre:rounded-lg
              prose-strong:text-white prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 🍏 XシェアもURLコピーもすべて内蔵した最強コンポーネント（これ1行ですべて完結します！） */}
          <ShareButtons slug={post.slug} title={post.title} />
        </article>
      </main>
    </div>
  );
}
