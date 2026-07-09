export const metadata = {
  title: "Redirecting to Discord | Tsukune Server",
  description: "Tsukune ServerのDiscordへのリダイレクトページです。",
};
import { redirect } from "next/navigation";

export default function DiscordRedirect() {
  redirect("https://discord.gg/87G2QC8sG6");

  return <div className="bg-black text-white p-8">Discordへ移動中...</div>;
}
