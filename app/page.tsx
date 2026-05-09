export const runtime = "edge";
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-12">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight">
        つくねサーバー
      </h1>

      <div className="w-full max-w-3xl rounded-xl border border-gray-700 bg-gray-800/50 p-8 shadow-xl">
        <div className="min-h-100 text-gray-300">
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
