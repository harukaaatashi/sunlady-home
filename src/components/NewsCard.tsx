'use client';

import { motion } from 'framer-motion';
import { News } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type NewsCardProps = {
  news: News;
  index: number;
  /**
   * 見出しレベル。ページの見出し階層に合わせて渡す。
   * /news は h1「News」配下なので h2（既定）、トップは h2「News」配下なので h3。
   */
  headingLevel?: 'h2' | 'h3';
};

export default function NewsCard({ news, index, headingLevel = 'h2' }: NewsCardProps) {
  const Heading = headingLevel;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.04 }}
      className="h-full"
    >
      <Link href={`/news/${news.id}`} className="block group h-full">
        <Card className="overflow-hidden hover:border-primary/30 transition-colors duration-200 h-full flex flex-col">
          <CardContent className="p-0 flex flex-col flex-1">
            {/*
              DESIGN.md § 5.1: 画像は常に aspect-video。未設定でも枠は維持する。
              背景は brand-navy 固定（CLAUDE.md § 3）。primary はダークモードで
              白寄りに反転するため、白抜きロゴが白地に乗って見えなくなる。
            */}
            <div className="relative aspect-video bg-brand-navy">
              {news.image?.url ? (
                <Image
                  src={news.image.url}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/hero-logo.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="brightness-0 invert opacity-90 w-1/3 h-auto"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
            {/* DESIGN.md § 5.2: タイトルが主、日付は従 */}
            <div className="p-4 flex-1 flex flex-col">
              <Heading className="text-base font-medium line-clamp-2 group-hover:text-primary transition-colors">
                {news.title}
              </Heading>
              {/* 日付は「読ませるテキスト」なので下限 14px = text-sm（DESIGN.md § 3 / § 5.2） */}
              <time
                className="mt-2 text-sm text-muted-foreground tabular-nums"
                dateTime={news.publishedAt}
              >
                {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
              </time>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
