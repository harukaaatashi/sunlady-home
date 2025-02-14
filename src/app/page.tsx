import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News, Partner } from '@/types';
import { Layout } from '@/components/Layout';
import { NewsCard } from '@/components/NewsCard';
import { PartnerCard } from '@/components/PartnerCard';
import { NewspaperIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Sunlady Home',
  description: 'Sunlady公式ウェブサイト',
};

async function getNews() {
  try {
    const response = await client.getList<News>({
      endpoint: 'news',
      queries: { limit: 3 },
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
    });
    return response.contents;
  } catch (error) {
    console.error('パートナー企業の取得に失敗しました:', error);
    return [];
  }
}

export default async function Home() {
  const [news, partners] = await Promise.all([getNews(), getPartners()]);

  return (
    <Layout>
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <NewspaperIcon className="h-6 w-6 text-gray-900 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">お知らせ</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.length > 0 ? (
            news.map((item, index) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">お知らせはありません</p>
          )}
        </div>
      </section>

      <section>
        <div className="flex items-center mb-8">
          <BuildingOffice2Icon className="h-6 w-6 text-gray-900 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">パートナー企業</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.length > 0 ? (
            partners.map((partner, index) => (
              <PartnerCard key={partner.id} partner={partner} index={index} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">パートナー企業の情報はありません</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
