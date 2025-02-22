import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import NewsCard from '@/components/NewsCard';
import { NewspaperIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import Pagination from '@/components/Pagination';

export const metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyの最新ニュースをお届けします。イベント情報、プレスリリースなどを掲載しています。',
};

export const revalidate = 60; // 1分ごとに再検証

const PER_PAGE = 6;

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getNewsList(page: number) {
  try {
    const response = await client.getList<News>({
      endpoint: 'news',
      queries: {
        orders: '-publishedAt',
        limit: PER_PAGE,
        offset: (page - 1) * PER_PAGE,
      },
    });
    return {
      contents: response.contents,
      totalCount: response.totalCount,
    };
  } catch (error) {
    console.error('ニュースの取得に失敗しました:', error);
    return {
      contents: [],
      totalCount: 0,
    };
  }
}

function LoadingNews() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 sm:p-4 animate-pulse w-full">
          <div className="aspect-[16/9] mb-3 sm:mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-full" />
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-1/3" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        </div>
      ))}
    </div>
  );
}

export default async function NewsPage({ searchParams }: Props) {
  const pageParam = searchParams?.page;
  const currentPage = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const { contents: news, totalCount } = await getNewsList(currentPage);
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 w-full">
      <div className="text-center mb-6 sm:mb-12">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <NewspaperIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">ニュース一覧</h1>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          Sunladyの最新ニュースをお届けします。
          企業の最新情報、イベント情報、プレスリリースなどを掲載しています。
        </p>
      </div>

      <Suspense fallback={<LoadingNews />}>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {news && news.length > 0 ? (
            news.map((item, index) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-8 sm:py-12">
              <NewspaperIcon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <p className="text-gray-500 text-base sm:text-lg">現在、ニュースはありません</p>
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/news"
          />
        )}
      </Suspense>
    </div>
  );
} 