import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/outline';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const news = await getNewsDetail(params.id);
  
  if (!news) {
    return {
      title: 'Not Found | Sunlady Home',
      description: 'ページが見つかりませんでした。',
    };
  }

  return {
    title: `${news.title} | Sunlady Home`,
    description: news.content.substring(0, 100).replace(/<[^>]*>/g, ''),
  };
}

async function getNewsDetail(id: string) {
  try {
    const news = await client.get<News>({
      endpoint: 'news',
      contentId: id,
    });
    return news;
  } catch {
    return null;
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const news = await getNewsDetail(params.id);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 lg:py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/news"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            ニュース一覧へ戻る
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={news.image.url}
              alt={news.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
              <CalendarIcon className="h-4 w-4 mr-1" aria-hidden="true" />
              <time dateTime={news.publishedAt}>
                {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
              </time>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              {news.title}
            </h1>

            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            ニュース一覧へ戻る
          </Link>
        </div>
      </article>
    </main>
  );
}