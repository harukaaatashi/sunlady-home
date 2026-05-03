export const revalidate = 60; // 60秒キャッシュ

import { Container } from '@/components/ui/container';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import NewsContent from '@/components/NewsContent';
import { Suspense } from 'react';

const PER_PAGE = 6;

type Props = {
  searchParams: { page?: string };
};

async function getNewsList(page: number) {
  try {
    const { contents, totalCount } = await client.getList<News>({
      endpoint: 'news',
      queries: {
        orders: '-publishedAt',
        limit: PER_PAGE,
        offset: (page - 1) * PER_PAGE,
      },
    });
    return { contents, totalPages: Math.ceil(totalCount / PER_PAGE) };
  } catch (err) {
    console.error('ニュースの取得に失敗しました:', err);
    return { contents: [], totalPages: 0 };
  }
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const currentPage = Math.max(1, Number(searchParams?.page) || 1);
  const { contents: news, totalPages } = await getNewsList(currentPage);

  return (
    <Container>
      <Suspense fallback={
        <div className="py-12 text-center">
          <h1 className="text-lg font-light tracking-widest uppercase text-foreground/80 mb-6">News</h1>
        </div>
      }>
        <NewsContent
          news={news}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>
    </Container>
  );
} 