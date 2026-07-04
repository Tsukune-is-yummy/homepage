// app/blog/[slug]/ShareButtons.tsx
"use client"; // 👈 このコンポーネントだけをブラウザ用（Client）にする

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export default function ShareButtons({ slug, title }: ShareButtonsProps) {
  const url = `https://tsukuneserver.xyz/blog/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("記事のURLをクリップボードにコピーしました！");
    } catch (err) {
      alert("コピーに失敗しました。URLを選択してコピーしてください。");
    }
  };

  return (
    <div className="mt-16 border-t border-zinc-800 pt-10 font-sans">
      <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
        SHARE THIS ARTICLE
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* X シェアボタン */}
        <a
          href={`https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title} | tsukuneserver.xyz`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group"
        >
          <div>
            <span className="block text-base font-bold text-white group-hover:text-zinc-300 transition-colors">
              X でポストする
            </span>
            <span className="block text-xs text-zinc-500 mt-0.5">
              フォロワーにこの記事をシェア
            </span>
          </div>
          <span className="text-zinc-600 group-hover:text-white transition-colors text-lg font-mono">
            ↗
          </span>
        </a>

        {/* URLコピーボタン（安全な onClick 仕様） */}
        <button
          onClick={handleCopy}
          className="flex items-center justify-between p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group text-left w-full cursor-pointer"
        >
          <div>
            <span className="block text-base font-bold text-white group-hover:text-zinc-300 transition-colors">
              URL をコピー
            </span>
            <span className="block text-xs text-zinc-500 mt-0.5">
              リンクをコピーして友達に送る
            </span>
          </div>
          <span className="text-zinc-600 group-hover:text-white transition-colors text-sm font-mono">
            [COPY]
          </span>
        </button>
      </div>
    </div>
  );
}
