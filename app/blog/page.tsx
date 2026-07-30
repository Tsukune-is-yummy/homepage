export const metadata = {
  title: "Blog | Tsukune Server",
  description: "Tsukune ServerのBlogのトップページです。",
};

import { posts } from "content";
import Link from "next/link";
import Image from "next/image"; // 🍏 Image コンポーネントをインポート！[cite: 3]

export default function BlogPage() {
  // 💡 posts をコピーして、日付順（新しい順）に並び替え[cite: 3]
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24 px-4">
        {/* ナビゲーションと見出し[cite: 3] */}
        <div className="mx-auto max-w-5xl mt-16 mb-6">
          <Link
            href="/"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            ← BACK TO HOME
          </Link>
          <h1 className="text-2xl font-bold tracking-widest text-white mt-4 font-sans uppercase">
            BLOG
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            サーバーの更新情報や開発日記
          </p>
        </div>

        {/* 記事一覧のグリッドコンテナ[cite: 3] */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full">
          {sortedPosts.map((post) => {
            // 日付を "YYYY.MM.DD" に整形
            const formattedDate = new Date(post.date)
              .toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replaceAll("/", ".");

            return (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 ease-in-out shadow-xl h-full overflow-hidden"
                >
                  {/* 🍏 カバー画像エリア（画像がある場合のみ表示） */}
                  {post.cover && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950 border-b border-zinc-800/60">
                      <Image
                        src={post.cover.src}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        blurDataURL={post.cover.blurDataURL}
                        placeholder="blur"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  )}

                  {/* 記事カードのテキスト部分 */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* 投稿日 */}
                      <span className="block text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                        {formattedDate}
                      </span>

                      {/* 記事タイトル */}
                      <h2 className="text-xl font-bold text-white mt-2 group-hover:text-zinc-200 transition-colors font-sans line-clamp-2">
                        {post.title}
                      </h2>

                      {/* 概要文（Veliteにdescriptionがある場合表示） */}
                      {post.description && (
                        <p className="text-xs text-zinc-400 mt-2 line-clamp-2 font-light">
                          {post.description}
                        </p>
                      )}
                    </div>

                    {/* READ ARTICLE リンク */}
                    <div className="text-xs text-zinc-500 font-mono mt-6 flex items-center gap-1 group-hover:text-white transition-colors">
                      READ ARTICLE{" "}
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* 記事が1件もないときのフォールバック[cite: 3] */}
        {posts.length === 0 && (
          <div className="mx-auto max-w-5xl text-center py-20 text-zinc-500 font-sans text-sm">
            記事がまだ投稿されていません。執筆されるのをお待ちください。
          </div>
        )}
      </main>
    </div>
  );
}
