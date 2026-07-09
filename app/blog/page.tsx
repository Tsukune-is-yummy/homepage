// app/blog/page.tsx

export const metadata = {
  title: "Blog | Tsukune Server",
  description: "Tsukune ServerのBlogのトップページです。",
};

import { posts } from "content";
import Link from "next/link";

export default function BlogPage() {
  // 💡 posts をコピーして、順序をパッと反転させた配列を作る
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24 px-4">
        {/* ナビゲーションと見出し（デザインシステム統一） */}
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

        {/* 記事一覧のグリッドコンテナ */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link
                href={`/blog/${post.slug}`}
                className="block p-8 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 ease-in-out shadow-xl h-full"
              >
                {/* 投稿日 */}
                <span className="block text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {post.date}
                </span>

                {/* 記事タイトル */}
                <h2 className="text-xl font-bold text-white mt-2 group-hover:text-zinc-200 transition-colors font-sans line-clamp-2">
                  {post.title}
                </h2>

                {/* 💡 もしVelite側でdescriptionやsummary（概要文）を定義しているなら、ここに表示できます */}
                {/* <p className="text-xs text-zinc-400 mt-2 line-clamp-2 font-light">
                  {post.description}
                </p> */}

                {/* 矢印のギミック（テック系サイトでよくあるやつ） */}
                <div className="text-xs text-zinc-500 font-mono mt-4 flex items-center gap-1 group-hover:text-white transition-colors">
                  READ ARTICLE{" "}
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* 記事が1件もないときのフォールバック */}
        {posts.length === 0 && (
          <div className="mx-auto max-w-5xl text-center py-20 text-zinc-500 font-sans text-sm">
            記事がまだ投稿されていません。執筆されるのをお待ちください。
          </div>
        )}
      </main>
    </div>
  );
}
