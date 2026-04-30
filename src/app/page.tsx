import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Partner } from '@/types/partner';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: '株式会社ファッション ディレクト サンレディ',
  description: 'ファッションショーおよびイベント企画制作運営、アパレル企画およびODM業務、企業プロモーション・PRおよびキャスティング業務を行うSunladyの公式サイトです。',
};

export const revalidate = 3600; // 1時間ごとに再生成（コンテンツ更新頻度に合わせて調整）

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
    const response = await client.getList<Partner>({
      endpoint: 'partner',
      queries: {
        limit: 10,
        orders: '-publishedAt',
      },
    });
    return response.contents;
  } catch (error) {
    console.error('パートナー情報の取得に失敗しました:', error);
    return [];
  }
}

export default async function Home() {
  const [latestNews, partners] = await Promise.all([getLatestNews(), getPartners()]);
  return <HomeContent latestNews={latestNews} partners={partners} />;
}
