import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Container } from '@/components/ui/container';
import NewsContent from '@/components/NewsContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyの最新ニュースをお届けします。イベント情報、プレスリリースなどを掲載しています。',
};

export const revalidate = 60; // 1分ごとに再検証

const PER_PAGE = 6;

type Props = {
  searchParams: { page?: string };
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

export default function NewsPage({ searchParams }: Props) {
  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <Container>
      <Suspense fallback={<LoadingFallback />}>
        <NewsPageContent searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}

async function NewsPageContent({ searchParams }: Props) {
  const page = searchParams?.page;
  const currentPage = Math.max(1, Number(page) || 1);
  const { contents: news, totalCount } = await getNewsList(currentPage);
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return <NewsContent news={news} currentPage={currentPage} totalPages={totalPages} />;
} 