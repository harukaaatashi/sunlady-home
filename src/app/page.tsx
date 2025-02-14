import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News, Partner } from '@/types';

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
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Sunlady</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">お知らせ</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((item) => (
              <article key={item.id} className="border p-4 rounded-lg">
                <time className="text-gray-500 text-sm">{new Date(item.publishedAt).toLocaleDateString('ja-JP')}</time>
                <h3 className="text-xl font-medium mt-2">{item.title}</h3>
              </article>
            ))
          ) : (
            <p className="text-gray-500">お知らせはありません</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">パートナー企業</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.length > 0 ? (
            partners.map((partner) => (
              <div key={partner.id} className="border p-4 rounded-lg">
                {partner.logo && (
                  <div className="mb-4">
                    <img
                      src={partner.logo.url}
                      alt={partner.name}
                      width={partner.logo.width}
                      height={partner.logo.height}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <h3 className="text-xl font-medium mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">パートナー企業の情報はありません</p>
          )}
        </div>
      </section>
    </main>
  );
}
