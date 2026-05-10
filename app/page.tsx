export const runtime = "edge";
import Link from "next/link";
import Image from "next/image";

const linkStyle = "font-mono mt-4 text-2xl text-white";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full bg-black">
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

        <p className="font-mono flex justify-start text-4xl text-white font-extrabold mx-auto mt-10 max-w-250">
          もくじ
        </p>

        <div className="mx-auto max-w-250 max-h-100 my-5 flex justify-center rounded-xl border border-gray-400 bg-gray-500/50 p-1 shadow-xl">
          <div className="min-h-100 text-gray-300">
            <p className="mt-4 text-3xl text-white font-mochiy">
              つくねのサーバーへようこそ！
            </p>
            <p className="font-mochiy mt-4 text-3xl text-white">
              ここは 管理者：つくね が運営しているつくねサーバーです！
            </p>
            <br />
            <Link href="/" className={linkStyle}>
              Top
            </Link>
            <br />
            <Link href="/blog" className={linkStyle}>
              Blog
            </Link>
            <br />
            <Link href="/about" className={linkStyle}>
              About
            </Link>
            <br />
            <Link href="/server" className={linkStyle}>
              Minecraft Server
            </Link>
            <br />
            <Link href="/contact" className={linkStyle}>
              Contact
            </Link>
            <br />
            <p className="mt-4 text-lg text-gray-200 font-bold font-serif">
              Next.js + PostCSS / TailwindCSS_V4 で作成
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
