import Link from "next/link";
import Image from "next/image";

export default function Server() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24 px-4">
        {/* ナビゲーションと見出し */}
        <div className="mx-auto max-w-5xl mt-16 mb-6">
          <Link
            href="/"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            ← BACK TO HOME
          </Link>
          <h1 className="text-2xl font-bold tracking-widest text-white mt-4 font-sans uppercase">
            MINECRAFT SERVER
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            サーバーの仕様と現在の状況
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-700 bg-zinc-800/50 p-6 md:p-8 shadow-xl space-y-8">
          <div className="overflow-hidden rounded-xl border border-zinc-700/50">
            <Image
              loading="eager"
              src="/server.webp"
              alt="Server Banner"
              width={1920}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 運営状況のアナウンス */}
          <div className="text-gray-300 font-sans space-y-4">
            <h2 className="text-xl md:text-2xl font-light text-white border-b border-zinc-700/50 pb-3 font-mochiy">
              現在の運営状況について
            </h2>
            <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl text-center space-y-2">
              <p className="text-2xl font-light text-amber-400 font-mochiy">
                現在、お問い合わせ制でひっそり運営中,最近はテスト運営してる
              </p>
              <p className="text-sm text-zinc-400 font-light">
                管理者のサーバーはサーバー用PCがあるのではなくメインPCでサーバーを動かすので、現在は一般公開していません。
                <br />
                参加を希望される方は、お気軽に「Contact」ページから管理者へ直談判してください。気軽にかもんぬ
              </p>
            </div>
          </div>

          {/* サーバー概要 */}
          <div className="text-gray-300 font-sans space-y-4 pt-4">
            <h2 className="text-xl md:text-2xl font-bold text-white border-b border-zinc-700/50 pb-3 font-mono tracking-wider">
              SERVER INFRASTRUCTURE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-light">
              {/* 1 */}
              <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30">
                <span className="block text-zinc-500 font-mono text-xs uppercase">
                  Platform
                </span>
                <span className="block text-base font-light text-white mt-1 font-mochiy">
                  Java版 ＆ 統合版
                </span>
                <span className="block text-xs text-zinc-400 mt-1">
                  GeyserMC x Spigot Pluginによる
                  <br />
                  クロスプレイ対応
                </span>
              </div>
              {/* 2 */}
              <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30">
                <span className="block text-zinc-500 font-mono text-xs uppercase">
                  Server Type
                </span>
                <span className="block text-base font-light text-white mt-1 font-mochiy">
                  ポチポチ自作サーバー
                </span>
                <span className="block text-xs text-zinc-400 mt-1">
                  管理者のメインPC
                  <br />
                  詳しくは
                  <Link
                    href="/specs"
                    className="text-white underline hover:text-zinc-300 transition-colors"
                  >
                    Specs
                  </Link>
                  をご覧ください
                </span>
              </div>
              {/* 3 */}
              <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30">
                <span className="block text-zinc-500 font-mono text-xs uppercase">
                  Cooling System
                </span>
                <span className="block text-base font-light text-red-500 mt-1 font-mochiy">
                  扇風機 + 外気
                </span>
                <span className="block text-xs text-zinc-400 mt-1">
                  うちにはエアコンがないので、
                  <br />
                  夏場は室温との戦いになります
                  <br />
                  ちなみに室温は32度を超えます(6月時点)
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
