'use client';

import { Metadata } from 'next';
import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Partner } from '@/types/partner';
import PartnerCard from '@/components/PartnerCard';
import { NewspaperIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

  return (
    <div>
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <NewspaperIcon className="h-6 w-6 text-gray-900 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">お知らせ</h2>
        </div>
        <div className="space-y-6">
          {latestNews && latestNews.length > 0 ? (
            latestNews.map((news) => (
              <article key={news.id} className="border rounded-lg p-6">
                <Link href={`/news/${news.id}`} className="flex gap-6">
                  <div className="w-48 h-32 relative flex-shrink-0">
                    <Image
                      src={news.image.url}
                      alt={news.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                    </p>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p className="text-gray-500">お知らせはありません</p>
          )}
        </div>
        <div className="mt-8">
          <Link
            href="/news"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            ニュース一覧へ
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center mb-8">
          <BuildingOffice2Icon className="h-6 w-6 text-gray-900 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">パートナー企業</h2>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="!overflow-visible"
          >
            {partners && partners.length > 0 ? (
              partners.map((partner, index) => (
                <SwiperSlide key={partner.id} className="!w-auto">
                  <PartnerCard partner={partner} index={index} />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-gray-500">パートナー企業の情報はありません</p>
            )}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
