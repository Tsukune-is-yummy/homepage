
export const metadata = {
  title: "Specs | Tsukune Server",
  description: "Tsukune Serverのスペックページです。",
};

import Link from "next/link";

export default function SpecsPage() {
  // メインPCのスペックデータ
  const mainPcSpecs = [
    { label: "CPU", value: "AMD Ryzen 5 7600X" },
    { label: "GPU", value: "ASUS PRIME Radeon RX 9060XT 16GB" },
    { label: "RAM", value: "32GB DDR5-5600" },
    { label: "M.2 SSD", value: "Samsung 990 PRO 1TB " },
    { label: "SATA SSD", value: "Transcend SSD 500GB (SSD220S)" },
    { label: "SATA HDD", value: "Western Digital3 Blue 500GB(WD5000LPVT)" },
    { label: "OS", value: "Arch Linux" },
    { label: "VR Headset", value: "Meta Quest 3" },
    { label: "Full Body Tracking", value: "ぽてとら(強化版)(SlimeVR Tracking)" },
  ];

  // サーバーマシンのスペックデータ
  const serverPcSpecs = [
    {
      label: "Server Type",
      value: "Minecraft Multi-Server (Java & Bedrock Cross-play)",
    },
    { label: "Server Software", value: "PaperMC / GeyserMC" },
    {
      label: "Network",
      value: "Direct Port Open　(Minecraft)",
    },
    { label: "Cooling System", value: "扇風機 + 外気" }, // 👈 例のあの扇風機！
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      {/* メインコンテンツエリア */}
      <main className="w-full flex-1 pb-24 px-4 sm:px-6 lg:px-8">
        {/* 見出しセクション */}
        <div className="mx-auto max-w-5xl mt-20 mb-12 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
            HARDWARE SPECS
          </h1>
          <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-3 tracking-widest uppercase">
            Environment & Hardware Configurations
          </p>
        </div>

        {/* スペックカードのグリッドレイアウト（2カラム） */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 🖥️ MAIN WORKSTATION CARD */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 md:p-8 backdrop-blur-md shadow-2xl hover:border-zinc-700 transition-all duration-300 group">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <h2 className="text-xl font-bold font-sans tracking-wide text-white group-hover:text-zinc-300 transition-colors">
                Main PC Station
              </h2>
              <span className="text-xs font-mono text-zinc-500 px-2 py-1 rounded border border-zinc-800 bg-zinc-900/50">
                DAILY & DEV
              </span>
            </div>

            <dl className="space-y-4 font-sans">
              {mainPcSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/30 pb-3"
                >
                  <dt className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-0.5 sm:mb-0">
                    {spec.label}
                  </dt>
                  <dd className="text-sm font-medium text-zinc-200 text-left sm:text-right font-sans">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 📡 SERVER MACHINE CARD */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 md:p-8 backdrop-blur-md shadow-2xl hover:border-zinc-700 transition-all duration-300 group">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <h2 className="text-xl font-bold font-sans tracking-wide text-white group-hover:text-zinc-300 transition-colors">
                Tsukune Server Host
              </h2>
              <span className="text-xs font-mono text-zinc-500 px-2 py-1 rounded border border-zinc-800 bg-zinc-900/50">
                24/7 ONLINE
              </span>
            </div>

            <dl className="space-y-4 font-sans">
              {serverPcSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/30 pb-3"
                >
                  <dt className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-0.5 sm:mb-0">
                    {spec.label}
                  </dt>
                  <dd className="text-sm font-medium text-zinc-200 text-left sm:text-right font-sans">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 下部ナビゲーション */}
        <div className="mx-auto max-w-5xl mt-12 text-center">
          <Link
            href="/"
            className="inline-block text-zinc-600 hover:text-white transition-colors text-xs font-mono tracking-widest uppercase border border-zinc-900 hover:border-zinc-700 rounded-full px-6 py-2.5 bg-zinc-950/40"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
