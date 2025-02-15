'use client';

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

type HomeContentProps = {
  latestNews: News[];
  partners: Partner[];
};

export default function HomeContent({ latestNews, partners }: HomeContentProps) {
  return (
    <div>
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <NewspaperIcon className="h-6 w-6 text-gray-900 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">新着ニュース</h2>
        </div>
        <div className="space-y-6">
          {latestNews && latestNews.length > 0 ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="!overflow-visible"
            >
              {latestNews.map((news) => (
                <SwiperSlide key={news.id}>
                  <article className="relative h-[400px] rounded-xl overflow-hidden group">
                    <Link href={`/news/${news.id}`} className="block h-full">
                      <div className="absolute inset-0">
                        <Image
                          src={news.image.url}
                          alt={news.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 1280px) 100vw, 1280px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                        <p className="text-sm sm:text-base mb-2 opacity-90">
                          {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                        </p>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 line-clamp-2">
                          {news.title}
                        </h2>
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm transition-colors hover:bg-white/30">
                          詳細を見る
                        </span>
                      </div>
                    </Link>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-500">新着ニュースはありません</p>
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
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            className="!overflow-visible"
          >
            {partners && partners.length > 0 ? (
              partners.map((partner, index) => (
                <SwiperSlide key={partner.id}>
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