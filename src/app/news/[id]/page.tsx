import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const news = await getNewsDetail(props.params.id);
  
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
  } catch (error) {
    return null;
  }
}

export default async function NewsDetailPage(props: Props) {
  const news = await getNewsDetail(props.params.id);

  if (!news) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
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