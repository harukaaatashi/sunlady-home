'use client';

import { News } from '@/types/news';
import { Partner } from '@/types/partner';
import PartnerCard from '@/components/PartnerCard';
import NewsCard from '@/components/NewsCard';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type HomeContentProps = {
  latestNews: News[];
  partners: Partner[];
};

export default function HomeContent({ latestNews, partners }: HomeContentProps) {
  return (
    <div className="w-full">
      {/* ヒーローセクション */}
      <section className="relative h-[60vh] sm:h-[80vh] min-h-[400px] sm:min-h-[600px] w-full" aria-label="ヒーローセクション">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/20" aria-hidden="true" />
        </div>
        <div className="relative h-full w-full">
          <Container className="h-full">
            <div className="flex items-center justify-center h-full">
              <motion.div 
                className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="/hero-logo.svg"
                  alt="株式会社ファッション ディレクト サンレディ"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 400px"
                />
              </motion.div>
            </div>
          </Container>
        </div>
      </section>

      {/* ニュースセクション */}
      <section className="py-12 sm:py-20" aria-labelledby="news-heading">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h2 id="news-heading" className="text-lg font-light tracking-widest uppercase text-foreground/80">News</h2>
            <Button variant="ghost" asChild>
              <Link href="/news" aria-label="ニュース一覧ページへ移動">
                一覧を見る
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              {latestNews && latestNews.length > 0 ? (
                <div className="divide-y">
                  {latestNews.map((news) => (
                    <Link
                      key={news.id}
                      href={`/news/${news.id}`}
                      className="block p-3 sm:p-4 hover:bg-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset"
                      aria-label={`${news.title}の詳細を読む`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 overflow-hidden bg-primary">
                          {news.image?.url ? (
                            <Image
                              src={news.image.url}
                              alt={`${news.title}のサムネイル画像`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 96px, 96px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Image
                                src="/hero-logo.svg"
                                alt=""
                                width={48}
                                height={48}
                                className="brightness-0 invert opacity-90 w-1/2 h-auto"
                                aria-hidden="true"
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <time className="text-xs sm:text-sm text-muted-foreground mb-1" dateTime={news.publishedAt}>
                            {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                          </time>
                          <h3 className="text-sm sm:text-base font-medium line-clamp-2">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground p-4" role="status">新着ニュースはありません</p>
              )}
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* パートナー企業セクション */}
      <section className="py-12 sm:py-20 overflow-hidden" aria-labelledby="partners-heading">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 id="partners-heading" className="text-lg font-light tracking-widest uppercase text-foreground/80">Partners</h2>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                size="icon"
                className="partner-prev-button group relative"
                aria-label="前のパートナーを表示"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                <span className="sr-only">前のパートナーを表示</span>
              </Button>
              <Button 
                variant="outline"
                size="icon"
                className="partner-next-button group relative"
                aria-label="次のパートナーを表示"
              >
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <span className="sr-only">次のパートナーを表示</span>
              </Button>
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
                disabledClass: 'opacity-50 cursor-not-allowed'
              }}
              autoplay={{ 
                delay: 4000, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              speed={600}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                  centeredSlides: true
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 24
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 30
                }
              }}
              className="partner-swiper [&_.swiper-slide]:!h-auto"
              aria-label="パートナースライダー"
            >
              {partners && partners.length > 0 ? (
                partners.map((partner, index) => (
                  <SwiperSlide key={partner.id} className="!h-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.04 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="h-full"
                    >
                      <PartnerCard partner={partner} index={index} />
                    </motion.div>
                  </SwiperSlide>
                ))
              ) : (
                <p className="text-muted-foreground" role="status">パートナーの情報はありません</p>
              )}
            </Swiper>
          </div>
        </Container>
      </section>
    </div>
  );
} 