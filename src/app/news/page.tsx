import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import Link from 'next/link';

export const metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyからのお知らせ一覧です。',
};

async function getNewsList() {
  const response = await client.getList<News>({
    endpoint: 'news',
    queries: {
      orders: '-publishedAt',
    },
  });
  return response.contents;
}

export default async function NewsPage() {
  const newsList = await getNewsList();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">ニュース一覧</h1>
      <div className="space-y-6">
        {newsList.map((news) => (
          <article key={news.id} className="border rounded-lg p-6">
            <Link href={`/news/${news.id}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                {news.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
              </p>
              <div className="text-gray-700 line-clamp-2">
                {news.content.replace(/<[^>]*>/g, '')}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 