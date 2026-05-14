import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <main className="min-h-screen bg-gray-800 text-white p-8">
      <div className="mx-auto max-w-250 max-h-150 mt-5 rounded-xl border border-gray-200 bg-gray-400/40 p-1 shadow-2xl">
        <div className="min-h-200 text-gray-300">
          <p className="mt-4 text-3xl text-white font-sans flex justify-center font-bold">
            つくねのMinecraftサーバーへようこそ！
          </p>
          <Link
            href="/"
            className="w-full overflow-hidden p-5 block justify-items-start mx-2"
          >
            <Image
              loading="eager"
              src="/server.webp"
              alt="Tsukune"
              width={964}
              height={330}
              priority
              className="w-150 h-50 object-cover max-w-none"
            />
          </Link>
          <p className="font-sans font-stretch-normal mt-6 text-2xl text-white flex justify-start mx-6">
            つくねのMinecraftサーバーへようこそ
            <br />
            管理者のつくねです。
            <br />
            現在、お問い合わせでのみの運営となっております
            <br />
            ご了承ください。
          </p>
        </div>
      </div>
    </main>
  );
}
