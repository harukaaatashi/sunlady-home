import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import Image from 'next/image';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

export const metadata = {
  title: 'パートナー一覧 | Sunlady Home',
  description: 'Sunladyのパートナー企業をご紹介。共に成長し、価値を創造するビジネスパートナーとして、多くの企業様と協力関係を築いています。',
};

export const revalidate = 60; // 1分ごとに再検証

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

function LoadingPartners() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 animate-pulse">
          <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
}

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <BuildingOffice2Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">パートナー企業</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sunladyは、多くの優れた企業様とパートナーシップを結び、
          共に成長し、新しい価値を創造することを目指しています。
          各企業様との強固な協力関係により、より良いサービスを提供しています。
        </p>
      </div>

      <Suspense fallback={<LoadingPartners />}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {partners && partners.length > 0 ? (
            partners.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <Image
                      src={partner.image.url}
                      alt={partner.name}
                      width={partner.image.width}
                      height={partner.image.height}
                      className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {partner.subtitle}
                  </p>
                  <div className="flex space-x-4">
                    {partner.homelink && (
                      <a
                        href={partner.homelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium group"
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
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium group"
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
      </Suspense>
    </div>
  );
}