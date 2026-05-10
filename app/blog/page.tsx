// app/blog/page.tsx
import { posts } from "content";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="container mx-auto py-10 px-4 text-black">
      <h1 className="text-4xl font-bold mb-10 text-black">ブログ記事一覧</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500">{post.date}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
