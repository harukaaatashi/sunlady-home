import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/outline';

export const revalidate = 60;

async function getNewsDetail(id: string) {
  try {
    const news = await client.get<News>({
      endpoint: 'news',
      contentId: id,
    });
    return news;
  } catch (error) {
    console.error('ニュース詳細の取得に失敗しました:', error);
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const newsId = await Promise.resolve(params.id);
  const news = await getNewsDetail(newsId);
  
  if (!news) {
    return {
      title: 'Not Found | Sunlady Home',
      description: 'ページが見つかりませんでした。',
    };
  }

  return {
    title: `${news.title} | Sunlady Home`,
    description: news.description,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const newsId = await Promise.resolve(params.id);
  const news = await getNewsDetail(newsId);

  if (!news) {
    notFound();
  }

  return (
    <Container>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">{news.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {formatDate(news.publishedAt)}
          </div>
        </CardHeader>
        <CardContent>
          <div className="aspect-[16/9] mb-6 bg-muted rounded-lg overflow-hidden">
            <Image
              src={news.image.url}
              alt={news.title}
              width={news.image.width}
              height={news.image.height}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </CardContent>
      </Card>
    </Container>
  );
}