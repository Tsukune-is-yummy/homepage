export const runtime = "edge";
import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <main className="min-h-screen bg-gray-800 text-white p-8">
      <div className="mx-auto max-w-250 max-h-100 mt-5 flex justify-center rounded-xl border border-gray-300 bg-gray-200/50 p-1 shadow-xl">
        <div className="min-h-200 text-gray-300">
          <p className="mt-4 text-2xl text-white font-sans font-bold">
            Contact
          </p>
          <p className="font-sans mt-4 text-2xl text-white font-bold">
            ここは 管理者：つくね が運営しているつくねサーバーです！
          </p>
        </div>
      </div>
    </main>
  );
}
