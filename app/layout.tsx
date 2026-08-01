import type { Metadata } from "next";
import { Geist, Geist_Mono, Mochiy_Pop_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script"; // 🍏 GA4用に追加

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
  "border-2 border-zinc-800 px-4 py-2 text-white no-underline hover:bg-white hover:text-black transition-all font-bold";

export const metadata: Metadata = {
  title: "Tsukuneserver Home",
  description: "Tsukune Server / Created With Next.js+TailwindCSS/PostCSS",
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
      {/* 🍏 GA4用のスクリプトを追加 */}
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8LYQ6JJ08Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8LYQ6JJ08Q');
          `}
        </Script>
      </head>

      <body className="bg-zinc-800/50 text-white antialiased border-zinc-900">
        {/* --- ヘッダー --- */}
        <header className="border-b border-zinc-900 px-4 md:px-8 py-4 bg-zinc-800 w-full overflow-hidden">
          <div className="mx-auto max-w-5xl flex justify-between items-center bg-zinc-800 gap-4 min-w-0">
            {/* ロゴエリア */}
            <Link
              href="/"
              className="flex justify-items-center border flex-shrink-0"
            >
              <Image
                src="/newlogo.webp"
                alt="tsukuneserver_Logo"
                width={3000}
                height={1055}
                className="h-12.5 w-auto"
              />
            </Link>

            {/* 右側のナビゲーションメニュー */}
            <div className="relative flex-1 min-w-0">
              <nav className="flex items-center gap-2 sm:gap-4 overflow-x-auto whitespace-nowrap scrollbar-none py-1 justify-start md:justify-end">
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
                  Server
                </Link>
                <Link href="/specs" className={linkStyle}>
                  Specs
                </Link>
                <Link href="/contact" className={linkStyle}>
                  Contact
                </Link>
              </nav>

              <div className="pointer-events-none absolute right-0 top-0 h-full w-9 bg-gradient-to-l from-zinc-900 to-transparent md:hidden" />
            </div>
          </div>
        </header>

        <main className="w-full bg-zinc-900 text-white">{children}</main>

        <footer className="bg-zinc-950 py-15">
          <div className="mx-auto max-w-5xl px-4 text-center text-white">
            <p>© 2026 Tsukune Server</p>
            <div className="mt-4 flex justify-center gap-4 ">
              <a
                href="https://github.com/Tsukune-is-yummy"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://hub.okayu-lab.dev/Tsukune_506"
                className="hover:underline"
              >
                おかゆの開発拠点
              </a>
              <a
                href="https://www.youtube.com/@Tsukune-main"
                className="hover:underline"
              >
                YouTube
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
