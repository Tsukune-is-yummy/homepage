# Next.js + Velite トラブルシューティング記録

## 環境

- Next.js 16.2.4 (webpack)
- Velite ^0.3.1
- React 19.2.4
- TypeScript

---

## 問題 1: `npm run dev` で 404 エラー

### 原因

`next.config.mjs` に `output: "export"` が常時有効になっていた。
この設定は静的HTMLエクスポート用であり、開発サーバーで有効にすると dynamic routes が正常にルーティングされず 404 になる。

### 修正

`output: "export"` および `images.unoptimized` を `npm run build` 時のみ適用するように変更。

```js
// next.config.mjs
const isBuild = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isBuild && { output: "export" }),
  images: {
    unoptimized: isBuild,
  },
};
```

---

## 問題 2: `npm run build` で `ReferenceError: self is not defined`

### 原因

`velite` が `package.json` の `dependencies` に入っていたため、WebpackがVeliteを本番サーバーサイドバンドルに含めようとした。
Veliteはブラウザ専用グローバル変数 `self` を参照するコードを含むため、Node.js環境（SSR/静的プリレンダリング）でクラッシュした。

### 修正

**① velite を devDependencies へ移動**

```bash
npm uninstall velite
npm install --save-dev velite
```

**② `next.config.mjs` に `serverExternalPackages` を追加**

```js
const nextConfig = {
  serverExternalPackages: ["velite"],
  // ...
};
```

---

## 問題 3: `self is not defined` 再発（トップページ `/`）

### 原因

`app/layout.tsx` をはじめ複数のファイルに `export const runtime = "edge"` が設定されていた。
Edge Runtime はブラウザ互換のAPIを使用するため、`output: "export"` による静的プリレンダリングと組み合わせると `self is not defined` が発生する。

### 修正

すべてのファイルから `export const runtime = "edge"` を削除。

```bash
# 残存箇所の確認コマンド
grep -r "runtime" /path/to/app --include="*.tsx" --include="*.ts" -l
```

---

## 問題 4: `generateStaticParams()` が missing エラー

### 原因

`output: "export"` モードでは動的ルート（`/blog/[slug]`）に対して、ビルド時にどのパスを生成するか明示する `generateStaticParams` が必須。未定義だとビルドエラーになる。

### 修正

`app/blog/[slug]/page.tsx` に `generateStaticParams` を追加。

```ts
import { posts } from "content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}
```

---

## 最終的なファイル構成

### `next.config.mjs`

```js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isBuild = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["velite"],
  ...(isBuild && { output: "export" }),
  images: {
    unoptimized: isBuild,
  },
  webpack: (config) => {
    config.resolve.alias["content"] = path.resolve(__dirname, ".velite");
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
```

### `app/blog/[slug]/page.tsx`

```tsx
import { posts } from "content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="ml-5 container py-10 text-black">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-900 mb-8">{post.date}</p>
      <hr className="mb-8" />
      <div
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
```
