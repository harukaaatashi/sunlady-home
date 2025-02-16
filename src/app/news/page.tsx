import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, NewspaperIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyからの最新のお知らせやプレスリリース、イベント情報などをご覧いただけます。',
};

const PER_PAGE = 12;

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
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <NewspaperIcon className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-3xl sm:text-4xl font-bold">ニュース一覧</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sunladyからの最新のお知らせやプレスリリース、イベント情報をご覧いただけます。
          最新のトレンドや業界の動向もお届けしています。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsList.map((news) => (
          <Link 
            key={news.id}
            href={`/news/${news.id}`}
            className="group"
          >
            <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
              <div className="relative aspect-video">
                <Image
                  src={news.image.url}
                  alt={news.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <time>{new Date(news.publishedAt).toLocaleDateString('ja-JP')}</time>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {news.content.replace(/<[^>]*>/g, '')}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  続きを読む
                  <svg
                    className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/news?page=${page}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === page
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm'
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