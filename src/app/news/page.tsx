import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Container } from '@/components/ui/container';
import NewsContent from '@/components/NewsContent';

export const metadata: Metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyの最新ニュースをお届けします。イベント情報、プレスリリースなどを掲載しています。',
};

export const dynamic = 'force-dynamic';
export const revalidate = 60;

const PER_PAGE = 6;

type Props = {
  searchParams: { page?: string };
};

export default async function NewsPage({ searchParams }: Props) {
  const page = searchParams?.page;
  const currentPage = Math.max(1, Number(page) || 1);

  try {
    const response = await client.getList<News>({
      endpoint: 'news',
      queries: {
        orders: '-publishedAt',
        limit: PER_PAGE,
        offset: (currentPage - 1) * PER_PAGE,
      },
    });

    const { contents: news, totalCount } = response;
    const totalPages = Math.ceil(totalCount / PER_PAGE);

    return (
      <Container>
        <NewsContent news={news} currentPage={currentPage} totalPages={totalPages} />
      </Container>
    );
  } catch (error) {
    console.error('ニュースの取得に失敗しました:', error);
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-light mb-6">エラーが発生しました</h1>
          <p className="text-muted-foreground">
            申し訳ありません。ニュースの取得中にエラーが発生しました。
            <br />
            しばらく時間をおいて再度お試しください。
          </p>
        </div>
      </Container>
    );
  }
} 