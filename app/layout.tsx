import type { Metadata } from "next";
import { Geist, Geist_Mono, Mochiy_Pop_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mochiyPopOne = Mochiy_Pop_One({
  variable: "--font-mochiy",
  weight: "400",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const linkStyle =
  "border-2 border-gray-800 px-4 py-2 text-white no-underline hover:bg-white hover:text-black transition-all font-bold";

export const metadata: Metadata = {
  title: "Tsukuneserver Home",
  description: "Tsukune　Server / Created With Next.js+TailwindCSS/PostCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${mochiyPopOne.variable} h-full antialiased bg-black text-white selection:bg-amber-950`}
    >
      <body className="bg-gray-800 text-white antialiased border-gray-900">
        {/* --- ヘッダー --- */}
        <header className="border border-gray-900 p-4 bg-gray-800">
          <div className="flex justify-between items-center bg-gray-800">
            <Link href="/" className="flex justify-items-center border ">
              <Image
                src="/newlogo.webp"
                alt="tsukuneserver_Logo"
                width={3000}
                height={1055}
                className="h-12.5 w-auto"
              />
            </Link>
            {/* 右側のナビゲーションメニュー */}
            <nav className="font-mono flex justify-end text-sm font-normal">
              <Link href="/" className={linkStyle}>
                Top
              </Link>
              <Link href="/blog" className={linkStyle}>
                Blog
              </Link>
              <Link href="/about" className={linkStyle}>
                About
              </Link>
              <Link href="/server" className={linkStyle}>
                MCServer
              </Link>
              <Link href="/contact" className={linkStyle}>
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="w-full bg-zinc-900 text-white">{children}</main>

        <footer className="bg-gray-950 py-15">
          <div className="mx-auto max-w-5xl px-4 text-center text-white">
            <p>© 2026 Tsukune Server</p>
            <div className="mt-4 flex justify-center gap-4 ">
              <a
                href="https://github.com/Tsukune-is-yummy"
                className="hover:underline"
              >
                GitHub(404)
              </a>
              <a
                href="https://hub.okayu-lab.dev/Tsukune_506"
                className="hover:underline"
              >
                おかゆの開発拠点
              </a>
              <a
                href="https://www.youtube.com/@Tsukune-ch506"
                className="hover:underline"
              >
                YouTube-メイン
              </a>
              <a
                href="https://www.youtube.com/@Tsukune-main"
                className="hover:underline"
              >
                YouTube-サブ
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
