import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon } from '@heroicons/react/24/outline';

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
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">ニュース一覧</h1>
      <div className="space-y-4 sm:space-y-6">
        {newsList.map((news) => (
          <article 
            key={news.id} 
            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Link 
              href={`/news/${news.id}`} 
              className="block sm:flex gap-4 sm:gap-6 h-full"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
                <Image
                  src={news.image.url}
                  alt={news.title}
                  fill
                  className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <time>{new Date(news.publishedAt).toLocaleDateString('ja-JP')}</time>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                  {news.title}
                </h2>
                <div className="text-sm sm:text-base text-gray-600 line-clamp-2 leading-relaxed">
                  {news.content.replace(/<[^>]*>/g, '')}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8 pb-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/news?page=${page}`}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
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