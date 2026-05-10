export const runtime = "edge";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full">
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

        <p className="flex justify-start text-4xl text-black font-bold mx-auto mt-10 max-w-250">
          Contents
        </p>

        <div className="mx-auto max-w-250 mt-5 flex justify-center rounded-xl border border-gray-300 bg-gray-200/50 p-1 shadow-xl">
          <div className="min-h-200 text-gray-300">
            <p className="mt-4 text-lg text-gray-700 font-extrabold">
              Next.js + TailwindCSS/PostCSS
            </p>
            <p className="mt-4 text-lg text-emerald-900">
              CSSがわからないです。CSSべんきょうしてまつ。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
