export const metadata = {
  title: "Contact | Tsukune Server",
  description: "Tsukune Serverの問い合わせページです。",
};

import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24 px-4">
        <div className="mx-auto max-w-5xl mt-16 mb-6">
          <Link
            href="/"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            ← BACK TO HOME
          </Link>
          <h1 className="text-2xl font-bold tracking-widest text-white mt-4 font-sans uppercase">
            CONTACT
          </h1>
          <p className="text-xs text-zinc-400 mt-1">つくねへのコンタクト方法</p>
        </div>

        {/* メインカード */}
        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-700 bg-zinc-800/50 p-6 md:p-8 shadow-xl space-y-8">
          <div className="text-gray-300 font-sans space-y-4">
            <h2 className="text-xl md:text-2xl font-light text-white border-b border-zinc-700/50 pb-3 font-mochiy">
              お問い合わせ窓口
            </h2>
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              つくねサーバーへの参加申請、開発プロジェクト /
              サーバーに関するお問い合わせ、
              <br />
              または「サーバー生存率を上げろ」という熱い激励は、以下のいずれかの方法でご連絡ください。
            </p>
          </div>

          {/* コンタクト方法のグリッド配置 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm font-light">
            {/* 1. メール */}
            <a
              href="mailto:admin@tsukuneserver.xyz"
              className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group block"
            >
              <span className="text-zinc-500 font-mono text-xs uppercase block">
                01. Email
              </span>
              <span className="text-base font-bold text-white mt-1 block group-hover:text-zinc-300">
                メールで問い合わせる
              </span>
              <span className="text-xs text-zinc-400 mt-2 block font-mono underline">
                admin@tsukuneserver.xyz
              </span>
              <span className="text-[10px] text-zinc-500 mt-1 block">
                ※mailtoが埋め込まれていますよ
              </span>
            </a>

            {/* 2. Discord */}
            {/* 💡 もしDiscordサーバーの招待リンクがある場合は href="https://discord.gg/xxxx" に書き換えてください */}
            <a
              href="/contact/todiscord"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group block"
            >
              <span className="text-zinc-500 font-mono text-xs uppercase block">
                02. Discord
              </span>
              <span className="text-base font-bold text-white mt-1 block group-hover:text-zinc-300">
                Discordサーバー / 個人DM
              </span>
              <span className="text-xs text-zinc-400 mt-2 block font-mono">
                USERID:{" "}
                <span className="text-zinc-200 font-bold">buta.tsukune506</span>
              </span>
              <span className="text-[10px] text-zinc-500 mt-1 block">
                ※開発Discordサーバーへの参加やDMでの直談判はこちら
              </span>
            </a>

            {/* 3. Google Form (もし今後フォームを作ったら有効化できるように用意) */}
            <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/10 opacity-60 md:col-span-2">
              <span className="text-zinc-600 font-mono text-xs uppercase block">
                03. Web Form (Coming soon)
              </span>
              <span className="text-base font-bold text-zinc-500 mt-1 block">
                Googleフォーム窓口（準備中）
              </span>
              <span className="text-xs text-zinc-600 mt-1 block">
                より手軽に申請できるフォームもポチポチ構築予定です。
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
