import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Partner } from '@/types/partner';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Sunlady Home',
  description: 'Sunlady公式ウェブサイト',
};

async function getLatestNews() {
  try {
    const response = await client.getList<News>({
      endpoint: 'news',
      queries: {
        limit: 3,
        orders: '-publishedAt',
      },
    });
    return response.contents;
  } catch (error) {
    console.error('ニュースの取得に失敗しました:', error);
    return [];
  }
}

async function getPartners() {
  try {
    // まず総件数を取得
    const totalResponse = await client.getList<Partner>({
      endpoint: 'partner',
      queries: { limit: 0 }
    });

    const allPartners = [];
    const limit = 100;
    const totalCount = totalResponse.totalCount;

    // 全件を取得
    for (let offset = 0; offset < totalCount; offset += limit) {
      const response = await client.getList<Partner>({
        endpoint: 'partner',
        queries: {
          orders: '-createdAt',
          limit,
          offset,
        },
      });
      allPartners.push(...response.contents);
    }

    return allPartners;
  } catch (error) {
    console.error('パートナー企業の取得に失敗しました:', error);
    return [];
  }
}

export default async function Home() {
  const [latestNews, partners] = await Promise.all([getLatestNews(), getPartners()]);
  return <HomeContent latestNews={latestNews} partners={partners} />;
}
