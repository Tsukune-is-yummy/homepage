import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const runtime = "edge";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const linkStyle =
  "border-2 border-white px-4 py-2 text-black no-underline hover:bg-black hover:text-white transition-all font-bold";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="flex flex-col bg-gray-200 text-bg-black antialiased">
        {/* --- ヘッダー --- */}
        <header className="m-4 border-2 border-gray-800 p-4 bg-white shadow-xl/30">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex justify-items-center">
              <Image
                src="/oldlogo.webp"
                alt="old_tsukuneserver_Logo"
                width={3000}
                height={1055}
                className="h-12.5 w-auto"
              />
            </Link>
            {/* 右側のナビゲーションメニュー */}
            <nav className="flex justify-end text-sm font-medium">
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

        <main className="w-full">{children}</main>

        <footer className="border-t bg-white py-10 mt-20">
          <div className="mx-auto max-w-5xl px-4 text-center text-gray-500">
            <p>© 2026 Tsukune Server</p>
            <div className="mt-4 flex justify-center gap-4">
              <a href="https://github.com/..." className="hover:underline">
                GitHub
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
