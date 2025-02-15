import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyからのお知らせ一覧です。',
};

const PER_PAGE = 10;

async function getNewsList(offset = 0) {
  const response = await client.getList<News>({
    endpoint: 'news',
    queries: {
      orders: '-publishedAt',
      limit: PER_PAGE,
      offset,
    },
  });
  return response;
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const offset = (currentPage - 1) * PER_PAGE;
  const { contents: newsList, totalCount } = await getNewsList(offset);
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">ニュース一覧</h1>
      <div className="space-y-6">
        {newsList.map((news) => (
          <article key={news.id} className="border rounded-lg p-6">
            <Link href={`/news/${news.id}`} className="flex gap-6">
              <div className="w-48 h-32 relative flex-shrink-0">
                <Image
                  src={news.image.url}
                  alt={news.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  {news.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                </p>
                <div className="text-gray-700 line-clamp-2">
                  {news.content.replace(/<[^>]*>/g, '')}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/news?page=${page}`}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 