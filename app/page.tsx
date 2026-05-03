export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
        Hello Tailwind CSS!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Next.jsのプロジェクトで正しく設定されています。
      </p>
      <button className="mt-6 rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800 transition">
        ボタンのテスト
      </button>
    </div>
  );
}
