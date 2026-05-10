import { posts } from "content";
import { notFound } from "next/navigation";

// params を Promise として受け取る（Next.js 15の仕様）
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // params を await して中身を取り出す
  const { slug } = await params;

  // slug が一致する記事を探す
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // 記事が見つからない場合は 404 へ
  }

  return (
    <article className="container py-10 text-black">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-900 mb-8">{post.date}</p>
      <hr className="mb-8" />
      {/* ここで本文（HTML）を表示 */}
      <div
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
