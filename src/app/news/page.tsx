import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Container } from '@/components/ui/container';
import NewsContent from '@/components/NewsContent';

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

export default async function NewsPage({ searchParams }: Props) {
  const page = searchParams?.page;
  const currentPage = Math.max(1, Number(page) || 1);
  const { contents: news, totalCount } = await getNewsList(currentPage);
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <Container>
      <NewsContent
        news={news}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </Container>
  );
} 