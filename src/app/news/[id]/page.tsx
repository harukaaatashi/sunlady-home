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

export const revalidate = 60; // 60秒ごとに再生成

export async function generateStaticParams() {
  try {
    const { contents } = await client.getList<News>({
      endpoint: 'news',
      queries: { limit: 100, fields: 'id' },
    });
    return contents.map((item) => ({ id: item.id }));
  } catch {
    return [];
  }
}

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
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const news = await getNewsDetail(params.id);
  
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

export default async function NewsDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const news = await getNewsDetail(params.id);

  if (!news) {
    notFound();
  }

  return (
    <Container>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-medium leading-snug">{news.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {formatDate(news.publishedAt)}
          </div>
        </CardHeader>
        <CardContent>
          {news.image?.url && (
            <div className="aspect-[16/9] mb-6 bg-muted rounded-lg overflow-hidden">
              <Image
                src={news.image.url}
                alt={news.title}
                width={news.image.width}
                height={news.image.height}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </CardContent>
      </Card>
    </Container>
  );
}