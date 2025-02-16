import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import Image from 'next/image';
import { BuildingOffice2Icon, GlobeAltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'パートナー一覧 | Sunlady Home',
  description: 'Sunladyのパートナー企業をご紹介。共に成長し、価値を創造するビジネスパートナーとして、多くの企業様と協力関係を築いています。',
};

export const revalidate = 60; // 1分ごとに再検証

async function getPartnersList() {
  try {
    const response = await client.getList<Partner>({
      endpoint: 'partner',
      queries: {
        orders: '-publishedAt',
        limit: 100,
      },
    });
    return response.contents;
  } catch (error) {
    console.error('パートナー情報の取得に失敗しました:', error);
    return [];
  }
}

function LoadingPartners() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-pulse">
          <div className="p-6 space-y-4">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
            <BuildingOffice2Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            パートナー企業
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Sunladyは、多くの優れた企業様とパートナーシップを結び、
            共に成長し、新しい価値を創造することを目指しています。
          </p>
        </div>

        {/* 特徴セクション */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
                <GlobeAltIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">グローバルネットワーク</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">世界中のパートナー企業と連携し、グローバルな価値を創造します。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">相互成長</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">パートナー企業との協力を通じて、共に成長し続けることを目指します。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
                <BuildingOffice2Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">業界リーダー</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">各分野のリーディングカンパニーと強固なパートナーシップを築いています。</p>
            </div>
          </motion.div>
        </div>

        <Suspense fallback={<LoadingPartners />}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners && partners.length > 0 ? (
              partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={partner.image.url}
                            alt={partner.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="ml-4">
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {partner.name}
                          </h2>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {partner.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {partner.description}
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
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="inline-flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  <BuildingOffice2Icon className="h-12 w-12 text-gray-400" />
                </div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  パートナー企業の情報はありません
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  現在、掲載できるパートナー企業の情報がありません。<br />
                  また後ほどご確認ください。
                </p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </main>
  );
}