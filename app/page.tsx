import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24">
        <Link href="/" className="block w-full overflow-hidden p-3">
          <Image
            loading="eager"
            src="/newlogo.webp"
            alt="Tsukune Server Logo"
            width={1920}
            height={675}
            sizes="100vw"
            priority
            className="w-full h-auto object-cover max-w-none"
          />
        </Link>
        <div className="mx-auto max-w-4xl max-h-50 my-5 flex justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 py-10 px-6 shadow-xl">
          <div className="min-h-100 text-gray-300">
            <p className="text-xl md:text-3xl font-mochiy leading-relaxed">
              つくねのサーバーへようこそ！
            </p>
            <p className="text-xl md:text-3xl font-mochiy leading-relaxed">
              ここは 管理者：つくね が運営しているつくねサーバーです！
            </p>
          </div>
        </div>
        <p className="font-sans flex justify-start text-2xl font-bold tracking-widest text-white mx-auto mt-10 max-w-5xl">
          INDEX
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto px-4 w-full">
          <Link
            href="/blog"
            className="block p-5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-700 hover:border-zinc-900/80 transition-all duration-300 ease-in-out"
          >
            <span className="block text-xl font-bold text-white">Blog</span>
            <span className="block text-xs text-zinc-400 mt-1">
              サーバーの更新情報や開発日記など
            </span>
          </Link>

          <Link
            href="/about"
            className="block p-5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-700 hover:border-zinc-900/80 transition-all duration-300 ease-in-out"
          >
            <span className="block text-xl font-bold text-white">About</span>
            <span className="block text-xs text-zinc-400 mt-1">
              つくねサーバーについて
            </span>
          </Link>

          <Link
            href="/server"
            className="block p-5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-700 hover:border-zinc-900/80 transition-all duration-300 ease-in-out"
          >
            <span className="block text-xl font-bold text-white">
              Minecraft Server
            </span>
            <span className="block text-xs text-zinc-400 mt-1">
              サーバーの詳細情報
            </span>
          </Link>

          <Link
            href="/contact"
            className="block p-5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-700 hover:border-zinc-900/80 transition-all duration-300 ease-in-out"
          >
            <span className="block text-xl font-bold text-white">Contact</span>
            <span className="block text-xs text-zinc-400 mt-1">
              お問い合わせ
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
