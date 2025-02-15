'use client';

import { News } from '@/types/news';
import { Partner } from '@/types/partner';
import PartnerCard from '@/components/PartnerCard';
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
    <div className="space-y-24">
      {/* ヒーローセクション */}
      <section className="relative h-[80vh] min-h-[600px] -mt-6">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Sunlady Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              未来を創る、<br />
              ビジネスパートナー
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sunladyは、革新的なソリューションと確かな技術力で、
              お客様のビジネスの成功をサポートします。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <ChartBarIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">高い技術力</h3>
            <p className="text-gray-600">最新のテクノロジーと豊富な経験を活かし、質の高いソリューションを提供します。</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <UserGroupIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">信頼のサポート</h3>
            <p className="text-gray-600">お客様に寄り添い、プロジェクトの成功まで責任を持ってサポートいたします。</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <GlobeAltIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">グローバル展開</h3>
            <p className="text-gray-600">国内外のネットワークを活かし、グローバルなビジネス展開をサポートします。</p>
          </div>
        </motion.div>
      </section>

      {/* ニュースセクション */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <NewspaperIcon className="h-6 w-6 text-gray-900 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">新着ニュース</h2>
        </div>
        <div className="space-y-6">
          {latestNews && latestNews.length > 0 ? (
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              effect="fade"
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="!overflow-visible"
            >
              {latestNews.map((news) => (
                <SwiperSlide key={news.id}>
                  <article className="relative h-[500px] rounded-xl overflow-hidden group">
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
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <p className="text-base mb-2 opacity-90">
                          {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                        </p>
                        <h2 className="text-2xl font-bold mb-4 line-clamp-2">
                          {news.title}
                        </h2>
                        <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm transition-colors hover:bg-white/30">
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
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ニュース一覧へ
          </Link>
        </div>
      </section>

      {/* パートナー企業セクション */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <BuildingOffice2Icon className="h-6 w-6 text-gray-900 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">パートナー企業</h2>
          </div>
          <div className="flex gap-2">
            <button className="partner-prev-button p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="partner-next-button p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative">
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
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 4.2,
                spaceBetween: 30
              }
            }}
            className="!overflow-visible partner-swiper"
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
              <p className="text-gray-500">パートナー企業の情報はありません</p>
            )}
          </Swiper>
        </div>
      </section>
    </div>
  );
} 