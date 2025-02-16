'use client';

import { News } from '@/types/news';
import { Partner } from '@/types/partner';
import PartnerCard from '@/components/PartnerCard';
import NewsCard from '@/components/NewsCard';
import { NewspaperIcon, BuildingOffice2Icon, ChartBarIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

type HomeContentProps = {
  latestNews: News[];
  partners: Partner[];
};

export default function HomeContent({ latestNews, partners }: HomeContentProps) {
  return (
    <div className="w-full">
      {/* ヒーローセクション */}
      <section className="relative h-[60vh] sm:h-[80vh] min-h-[400px] sm:min-h-[600px] -mt-6 w-full" aria-label="ヒーローセクション">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
          {/* 一時的にヒーロー画像を非表示にします */}
          {/* <Image
            src="/hero-image.jpg"
            alt="Sunladyのビジネスイメージ - オフィスでの打ち合わせシーン"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" aria-hidden="true" />
        </div>
        <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              未来を創る、<br className="sm:hidden" />
              ビジネスパートナー
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sunladyは、革新的なソリューションと確かな技術力で、
              お客様のビジネスの成功をサポートします。
            </motion.p>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">Sunladyの特徴</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
              <ChartBarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">高い技術力</h3>
            <p className="text-gray-600 dark:text-gray-300">最新のテクノロジーと豊富な経験を活かし、質の高いソリューションを提供します。</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
              <UserGroupIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">信頼のサポート</h3>
            <p className="text-gray-600 dark:text-gray-300">お客様に寄り添い、プロジェクトの成功まで責任を持ってサポートいたします。</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
              <GlobeAltIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">グローバル展開</h3>
            <p className="text-gray-600 dark:text-gray-300">国内外のネットワークを活かし、グローバルなビジネス展開をサポートします。</p>
          </div>
        </motion.div>
      </section>

      {/* ニュースセクション */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24" aria-labelledby="news-heading">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <NewspaperIcon className="h-6 w-6 text-gray-900 dark:text-blue-400 mr-2" aria-hidden="true" />
            <h2 id="news-heading" className="text-2xl font-semibold text-gray-900 dark:text-gray-100">新着ニュース</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 py-1"
            aria-label="ニュース一覧ページへ移動"
          >
            一覧を見る
            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {latestNews && latestNews.length > 0 ? (
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {latestNews.map((news) => (
                <Link 
                  key={news.id} 
                  href={`/news/${news.id}`}
                  className="block p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-label={`${news.title}の詳細を読む`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={news.image.url}
                        alt={`${news.title}のサムネイル画像`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 96px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <time className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1" dateTime={news.publishedAt}>
                        {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                      <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 p-4" role="status">新着ニュースはありません</p>
          )}
        </div>
      </section>

      {/* パートナー企業セクション */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 overflow-hidden" aria-labelledby="partners-heading">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <BuildingOffice2Icon className="h-6 w-6 text-gray-900 dark:text-blue-400 mr-2" aria-hidden="true" />
            <h2 id="partners-heading" className="text-2xl font-semibold text-gray-900 dark:text-gray-100">パートナー企業</h2>
          </div>
          <div className="flex gap-2">
            <button 
              className="partner-prev-button p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="前のパートナー企業を表示"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-300" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              className="partner-next-button p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="次のパートナー企業を表示"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-300" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              prevEl: '.partner-prev-button',
              nextEl: '.partner-next-button',
            }}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            speed={800}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 16
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3.1,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            className="partner-swiper"
            aria-label="パートナー企業スライダー"
          >
            {partners && partners.length > 0 ? (
              partners.map((partner, index) => (
                <SwiperSlide key={partner.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <PartnerCard partner={partner} index={index} />
                  </motion.div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-gray-500" role="status">パートナー企業の情報はありません</p>
            )}
          </Swiper>
        </div>
      </section>
    </div>
  );
} 