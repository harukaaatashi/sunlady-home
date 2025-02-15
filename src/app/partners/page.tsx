import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import Image from 'next/image';

export const metadata = {
  title: 'パートナー一覧 | Sunlady Home',
  description: 'Sunladyのパートナー企業一覧です。',
};

async function getPartnersList() {
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

    // 配列を反転させて返す
    return allPartners.reverse();
  } catch (error) {
    console.error('パートナー企業の取得に失敗しました:', error);
    return [];
  }
}

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">パートナー企業</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {partners && partners.length > 0 ? (
          partners.map((partner) => (
            <div key={partner.id} className="border rounded-lg p-4">
              <div className="aspect-w-16 aspect-h-9 mb-3">
                <Image
                  src={partner.image.url}
                  alt={partner.name}
                  width={partner.image.width}
                  height={partner.image.height}
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold mb-1">{partner.name}</h2>
              <p className="text-gray-700 text-sm mb-3">{partner.subtitle}</p>
              <div className="flex space-x-3">
                {partner.homelink && (
                  <a
                    href={partner.homelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    ウェブサイト →
                  </a>
                )}
                {partner.snslink && (
                  <a
                    href={partner.snslink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    SNS →
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">パートナー企業の情報はありません</p>
        )}
      </div>
    </div>
  );
}