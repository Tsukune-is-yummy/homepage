export const runtime = "edge";
import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <main className="min-h-screen bg-gray-800 text-white p-8">
      <div className="mx-auto max-w-250 max-h-150 mt-5 rounded-xl border border-gray-200 bg-gray-400/40 p-1 shadow-2xl">
        <div className="min-h-200 text-gray-300">
          <p className="mt-4 text-3xl text-white font-sans flex justify-center font-bold">
            つくねのContactページへようこそ！
          </p>
          <p className="font-mono font-bold font-stretch-normal mt-6 text-2xl text-white flex justify-start mx-10">
            ここではつくねへのコンタクト方法が書かれています
            <br />
            1.メールで問い合わせる
            <br />
            admin@tsukuneserver.xyz
            <br />
            2.Discordで問い合わせる
            <br />
            USERID:buta.tsukune506
          </p>
        </div>
      </div>
    </main>
  );
}
