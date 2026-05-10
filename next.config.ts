import { withVelite } from "velite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// 関数として存在するかチェックしながらエクスポート
export default typeof withVelite === "function"
  ? withVelite(nextConfig)
  : nextConfig;
