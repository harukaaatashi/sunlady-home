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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 animate-pulse">
          <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
}

export default async function NewsPage() {
  const news = await getNewsList();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <NewspaperIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">ニュース一覧</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sunladyの最新ニュースをお届けします。
          企業の最新情報、イベント情報、プレスリリースなどを掲載しています。
        </p>
      </div>

      <Suspense fallback={<LoadingNews />}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news && news.length > 0 ? (
            news.map((item, index) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <NewspaperIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">現在、ニュースはありません</p>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
} 