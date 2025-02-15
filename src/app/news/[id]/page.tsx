import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(
  { params }: { params: { id: string } },
  _parent: ResolvingMetadata
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
  } catch (_error) {
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
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link
          href="/news"
          className="inline-block px-6 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          ← ニュース一覧へ戻る
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <div className="text-gray-600 mb-4">
        <time dateTime={news.publishedAt}>
          {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
        </time>
      </div>
      <div className="mb-8 relative aspect-video">
        <Image
          src={news.image.url}
          alt={news.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
    </article>
  );
}