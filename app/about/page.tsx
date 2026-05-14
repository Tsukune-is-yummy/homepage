import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <main className="min-h-screen bg-gray-800 text-white p-8">
      <div className="mx-auto max-w-250 max-h-150 mt-5 rounded-xl border border-gray-200 bg-gray-400/40 p-1 shadow-2xl">
        <div className="min-h-200 text-gray-300">
          <p className="mt-4 text-3xl text-white font-sans flex justify-center font-bold">
            つくねのサーバーへようこそ！
          </p>
          <Link
            href="/"
            className="w-full overflow-hidden p-5 block justify-items-start mx-2"
          >
            <Image
              loading="eager"
              src="/tsukune.webp"
              alt="Tsukune"
              width={670}
              height={670}
              priority
              className="w-60 h-60 object-cover max-w-none"
            />
          </Link>
          <p className="font-sans mt-6 text-2xl text-white font-stretch-normal flex justify-start mx-6">
            はじめまして！
            <br />
            管理者のつくねと申します！
            <br />
            私は学生です。
            <br />
            VRChatやMinecraftを趣味としています。
            <br />
            Minecraftでサーバーを立てています。
            <br />
            最近では、Pythonで提出物通知システムを作成しています。
          </p>
        </div>
      </div>
    </main>
  );
}
