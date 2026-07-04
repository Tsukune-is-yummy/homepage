import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24 px-4">
        {/* トップに戻る */}
        <div className="mx-auto max-w-5xl mt-16 mb-6">
          <Link
            href="/"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            ← BACK TO HOME
          </Link>
          <h1 className="text-2xl font-bold tracking-widest text-white mt-4 font-sans">
            ABOUT
          </h1>
          <p className="text-xs text-zinc-400 mt-1">管理者のプロフィール</p>
        </div>

        {/* メインの自己紹介カード*/}
        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-700 bg-zinc-800/50 p-8 md:p-12 shadow-xl">
          {/* md:flex を使ってレスポンシブに対応 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* 少しこだわる） */}
            <div className="flex-shrink-0">
              <div className="overflow-hidden rounded-xl border border-zinc-700/50 shadow-md">
                <Image
                  loading="eager"
                  src="/tsukune.webp"
                  alt="Tsukune"
                  width={300}
                  height={300}
                  priority
                  className="w-48 h-48 md:w-64 md:h-64 object-cover"
                />
              </div>
            </div>

            {/* テキストエリア */}
            <div className="flex-1 text-gray-300 space-y-6 font-sans">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-zinc-700/50 pb-3">
                はじめまして！
              </h2>
              <div className="space-y-4 text-xl md:text-lg leading-relaxed font-extrabold">
                管理者の「つくね」です。
              </div>
              <div className="border-l-2 border-zinc-500 pl-4 text-base md:text-lg font-bold text-zinc-300 italic">
                好きなことに囲まれて生きていたい高校2年生
              </div>
              <p className="text-xs text-zinc-500 font-mono">
                ※なお、現実は提出物の期限に追われている模様。欠点/赤点保有者(あぶない)
              </p>
              <div className="space-y-4 text-base md:text-lg leading-relaxed font-light">
                <p>
                  普段は趣味として{" "}
                  <span className="text-white font-medium">VRChat</span> や{" "}
                  <span className="text-white font-medium">Minecraft</span>{" "}
                  を中心に活動しています。
                </p>
                <p>
                  Minecraftでは、みんなが集まれるゲームサーバー（つくねサーバー）を個人的に構築・運営しています。
                </p>
                <p>
                  最近の個人的な開発プロジェクトでは、Pythonを使った「提出物通知システム」の作成に黙々と取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-700 bg-zinc-800/50 p-8 md:p-12 shadow-xl">
          <div className="flex-1 text-gray-300 space-y-6 font-sans">
            <div className="space-y-4 text-xl md:text-lg leading-relaxed font-light">
              <span className="text-white font-bold">Language</span> : HTML /
              CSS / Python / 日本語（一応ネイティブ）/ 英語（英検3級はある） /
              猫語（勉強中）
            </div>
          </div>
        </div>
        <br />
        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-700 bg-zinc-800/50 p-8 md:p-12 shadow-xl">
          <div className="flex-1 text-gray-300 space-y-6 font-sans">
            <div className="space-y-4 text-xl md:text-lg leading-relaxed font-light">
              <span className="text-white font-bold">サーバー</span> :
              メインPCをサーバー用途に使用してます (あぶない)
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
