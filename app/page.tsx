export const runtime = "edge";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
        つくねのホームページ
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Next.jsのプロジェクトで正しく設定されています。
      </p>
      <p className="mt-4 text-lg text-emerald-900">
        CSSがわからないです。CSSべんきょうしてまつ。
      </p>
    </div>
  );
}
