import RSS from 'rss';
import { posts } from 'content';
// 静的エクスポート（output: 'export'）時にビルド時生成させる指定
export const dynamic = 'force-static';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tsukuneserver.xyz';

  const feed = new RSS({
    title: 'Tsukuneserver', // サイト名・ブログタイトル
    description: 'TsukuneserverのRSSです',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    language: 'ja',
    copyright: `© ${new Date().getFullYear()} Tsukune`,
  });

  // 日付の降順に並び替え（下書き等を除外する場合は filter も追加）
  const sortedPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  for (const post of sortedPosts) {
    feed.item({
      title: post.title,
      description: post.description || '',
      url: `${siteUrl}/blog/${post.slug}`, // 実際の記事ページのルーティングに合わせて調整
      date: post.date,
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
