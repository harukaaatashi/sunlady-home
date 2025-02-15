import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import Image from 'next/image';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'パートナー一覧 | Sunlady Home',
  description: 'Sunladyのパートナー企業をご紹介。共に成長し、価値を創造するビジネスパートナーとして、多くの企業様と協力関係を築いています。',
};

async function getPartnersList() {
  try {
    const totalResponse = await client.getList<Partner>({
      endpoint: 'partner',
      queries: { limit: 0 }
    });

    const allPartners = [];
    const limit = 100;
    const totalCount = totalResponse.totalCount;

    for (let offset = 0; offset < totalCount; offset += limit) {
      const response = await client.getList<Partner>({
        endpoint: 'partner',
        queries: {
          orders: 'createdAt',
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

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <BuildingOffice2Icon className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-3xl sm:text-4xl font-bold">パートナー企業</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sunladyは、多くの優れた企業様とパートナーシップを結び、
          共に成長し、新しい価値を創造することを目指しています。
          各企業様との強固な協力関係により、より良いサービスを提供しています。
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {partners && partners.length > 0 ? (
          partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={partner.image.url}
                    alt={partner.name}
                    width={partner.image.width}
                    height={partner.image.height}
                    className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {partner.subtitle}
                </p>
                <div className="flex space-x-4">
                  {partner.homelink && (
                    <a
                      href={partner.homelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium group"
                    >
                      ウェブサイト
                      <svg
                        className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                  {partner.snslink && (
                    <a
                      href={partner.snslink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium group"
                    >
                      SNS
                      <svg
                        className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <BuildingOffice2Icon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">パートナー企業の情報は現在ありません</p>
          </div>
        )}
      </div>
    </div>
  );
}