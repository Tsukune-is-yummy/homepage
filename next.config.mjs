/** @type {import('next').NextConfig} */

const isBuild = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  // `output: "export"` は静的ビルド時のみ有効にする
  // dev モードで有効にすると dynamic routes が404になるため
  ...(isBuild && { output: "export" }),
  images: {
    // 静的エクスポートでは画像最適化が使えないため build 時のみ無効化
    unoptimized: isBuild,
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

class VeliteWebpackPlugin {
  static started = false;
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      const { build } = await import("velite");
      await build({ watch: dev, clean: !dev });
    });
  }
}

export default nextConfig;
