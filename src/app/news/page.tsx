import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import NewsCard from '@/components/NewsCard';
import { NewspaperIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

export const metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyの最新ニュースをお届けします。企業の最新情報、イベント情報、プレスリリースなどを掲載しています。',
};

export const revalidate = 60; // 1分ごとに再検証

async function getNewsList() {
  try {
    const response = await client.getList<News>({
      endpoint: 'news',
      queries: {
        orders: '-publishedAt',
        limit: 100,
      },
    });
    return response.contents;
  } catch (error) {
    console.error('ニュースの取得に失敗しました:', error);
    return [];
  }
}

function LoadingNews() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-pulse">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700" />
          <div className="p-6 space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function NewsPage() {
  const news = await getNewsList();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
            <NewspaperIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ニュース一覧
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Sunladyの最新ニュースをお届けします。
            企業の最新情報、イベント情報、プレスリリースなどを掲載しています。
          </p>
        </div>

        <Suspense fallback={<LoadingNews />}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news && news.length > 0 ? (
              news.map((item, index) => (
                <NewsCard key={item.id} news={item} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="inline-flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  <NewspaperIcon className="h-12 w-12 text-gray-400" />
                </div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  ニュースはありません
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  現在、掲載できるニュースがありません。<br />
                  また後ほどご確認ください。
                </p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </main>
  );
} 