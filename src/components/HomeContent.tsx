'use client';

import { News } from '@/types/news';
import { Partner } from '@/types/partner';
import PartnerCard from '@/components/PartnerCard';
import NewsCard from '@/components/NewsCard';
import ContactAccess from '@/components/ContactAccess';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

type HomeContentProps = {
  latestNews: News[];
  partners: Partner[];
};

// 1セットが画面幅を超えないとループの継ぎ目が見えるため、最低このカード数まで繰り返す。
// カード幅 240px なので 8 枚で 1920px 相当。
const MIN_MARQUEE_CARDS = 8;

export default function HomeContent({ latestNews, partners }: HomeContentProps) {
  // パートナー数が少なくても途切れずに流れ続けるよう、必要なら同じ並びを繰り返す
  const marqueePartners = useMemo(() => {
    if (partners.length === 0) return [];
    const repeat = Math.max(1, Math.ceil(MIN_MARQUEE_CARDS / partners.length));
    return Array.from({ length: repeat }, () => partners).flat();
  }, [partners]);

  // CSS 側で -50% まで動かすため、ちょうど2セット並べる（§ 6.1）
  const marqueeTrack = useMemo(
    () => [...marqueePartners, ...marqueePartners],
    [marqueePartners],
  );

  return (
    <div className="w-full">
      {/* ヒーローセクション */}
      {/* DESIGN.md § 5.0: ファーストビューに最初の写真が覗く高さに抑える */}
      <section
        className="relative h-[60vh] min-h-[400px] sm:h-[65vh] sm:max-h-[640px] sm:min-h-[480px] w-full"
        aria-label="ヒーローセクション"
      >
        {/* via- を挟んで階調を1段細かくし、広い面でのバンディングを抑える */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy/70">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/40 to-brand-navy/20" aria-hidden="true" />
        </div>
        <div className="relative h-full w-full">
          <Container className="h-full">
            {/* 視覚上はロゴが担うが、見出し階層と検索結果のために h1 を置く */}
            <h1 className="sr-only">株式会社ファッション ディレクト サンレディ</h1>
            <div className="flex items-center justify-center h-full">
              {/* DESIGN.md § 5.0: ロゴはヒーロー高さのおおむね半分に収める */}
              <motion.div
                className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="/hero-logo.svg"
                  alt="株式会社ファッション ディレクト サンレディ"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 340px"
                />
              </motion.div>
            </div>
          </Container>
        </div>
      </section>

      {/*
        ニュースセクション
        DESIGN.md § 0.1 / § 5.1: 写真が語る。/news と同じ NewsCard を共用し、
        画像を aspect-video の大判で見せる（サムネイル化しない）。
      */}
      <section className="py-12 sm:py-20" aria-labelledby="news-heading">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h2 id="news-heading" className="text-lg font-light tracking-widest uppercase text-foreground/80">News</h2>
            {/* DESIGN.md § 3.2: タップ領域 44px */}
            <Button variant="ghost" asChild className="h-11">
              <Link href="/news" aria-label="ニュース一覧ページへ移動">
                一覧を見る
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          {latestNews && latestNews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((news, index) => (
                <NewsCard key={news.id} news={news} index={index} headingLevel="h3" />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-4">
                <p className="text-muted-foreground" role="status">新着ニュースはありません</p>
              </CardContent>
            </Card>
          )}
        </Container>
      </section>

      {/* パートナー企業セクション */}
      <section className="py-12 sm:py-20 overflow-hidden" aria-labelledby="partners-heading">
        <Container>
          <div className="mb-8">
            <h2 id="partners-heading" className="text-lg font-light tracking-widest uppercase text-foreground/80">Partners</h2>
          </div>
          {marqueePartners.length === 0 ? (
            <p className="text-muted-foreground" role="status">パートナーの情報はありません</p>
          ) : (
            /*
              DESIGN.md § 6.1: 継続アニメーション
              4秒ごとにカクッと進む挙動をやめ、linear で等速に流し続ける。
              更新が止まってもサイトが死んで見えないようにするための動き。
              ホバー中は CSS 側で一時停止する。
            */
            <div className="marquee relative w-full overflow-hidden" aria-label="パートナー一覧">
              <div className="marquee-track">
                {marqueeTrack.map((partner, index) => (
                  // 同じ並びを2セット出すため、key には index を含める
                  <div
                    key={`${partner.id}-${index}`}
                    // 間隔は gap ではなく pr で持つ。gap だと 2 セットの継ぎ目に
                    // 半端な隙間が残り、translateX(-50%) がずれてループが目に見える
                    className="w-[220px] sm:w-[240px] shrink-0 pr-6 sm:pr-8 box-content"
                    // 1セット目だけを読み上げ対象にする（2セット目は視覚的な複製）
                    aria-hidden={index >= marqueePartners.length}
                  >
                    {/* マーキーでは出現アニメを止める（画面外のカードが透明のままになるため） */}
                    <PartnerCard partner={partner} index={0} animate={false} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* DESIGN.md § 5.3: 場所と連絡先はトップページ内で完結させる */}
      <ContactAccess />
    </div>
  );
}