import { posts } from "content";
import { notFound } from "next/navigation";

// 静的エクスポート用: ビルド時に全slugを列挙する
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
    <article className="ml-5 container py-10 text-white">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-200 mb-8">{post.date}</p>
      <hr className="mb-8" />
      <div
        className="prose prose-slate max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
