import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import Image from 'next/image';

export const metadata = {
  title: 'パートナー一覧 | Sunlady Home',
  description: 'Sunladyのパートナー企業一覧です。',
};

async function getPartnersList() {
  try {
    const response = await client.getList<Partner>({
      endpoint: 'partner',
      queries: {
        orders: 'name',
        limit: 100
      },
    });
    return response.contents;
  } catch (error) {
    console.error('パートナー企業の取得に失敗しました:', error);
    return [];
  }
}

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">パートナー企業</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {partners && partners.length > 0 ? (
          partners.map((partner) => (
            <div key={partner.id} className="border rounded-lg p-6">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <Image
                  src={partner.image.url}
                  alt={partner.name}
                  width={partner.image.width}
                  height={partner.image.height}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
              <p className="text-gray-700 mb-4">{partner.subtitle}</p>
              <div className="flex space-x-4">
                {partner.homelink && (
                  <a
                    href={partner.homelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ウェブサイト →
                  </a>
                )}
                {partner.snslink && (
                  <a
                    href={partner.snslink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
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