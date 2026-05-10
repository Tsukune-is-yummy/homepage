export const runtime = "edge";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-black">
        Tsukune Server Homepage
      </h1>
      <Link href="/" className="flex justify-items-normal">
        <Image
          src="/newlogo.webp"
          alt="つくねさーばーロゴ"
          width={1920}
          height={675}
          className="p-5 x-2"
        />
      </Link>

      <div className="w-300 rounded-xl border border-gray-300 bg-gray-200/50 p-8 shadow-xl">
        <div className="min-h-200 text-gray-300">
          <p className="mt-4 text-lg text-gray-700">
            Next.js + TailwindCSS/PostCSS
          </p>
          <p className="mt-4 text-lg text-emerald-900">
            CSSがわからないです。CSSべんきょうしてまつ。
          </p>
        </div>
      </div>
    </main>
  );
}
