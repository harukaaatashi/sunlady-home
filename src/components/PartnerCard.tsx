'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Partner } from '@/types/partner';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

type PartnerCardProps = {
  partner: Partner;
  index: number;
  /**
   * スクロールインの出現アニメーションを行うか。
   * マーキー内では画面外のカードが透明のままになるため false を渡す。
   */
  animate?: boolean;
};

export default function PartnerCard({ partner, index, animate = true }: PartnerCardProps) {
  const href = partner.homelink || partner.snslink;

  const inner = (
    <div className="border border-border hover:border-primary/30 transition-colors duration-200 flex flex-col h-full group">
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        {/*
          DESIGN.md § 6 / § 7: ホバーの反応は scale ではなく filter で作る。
          ロゴの色がバラバラでも一覧が整い、ホバーでその1枚だけ色が戻る。
        */}
        <Image
          src={partner.image.url}
          alt={`${partner.name}のロゴ`}
          fill
          className="object-contain p-4 grayscale group-hover:grayscale-0 transition-[filter] duration-200 motion-reduce:transition-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium leading-snug">{partner.name}</h3>
            {partner.subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">{partner.subtitle}</p>
            )}
          </div>
          {href && (
            <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </div>
        {partner.description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{partner.description}</p>
        )}
      </div>
    </div>
  );

  const content = href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {inner}
    </Link>
  ) : (
    inner
  );

  if (!animate) {
    return <div className="h-full">{content}</div>;
  }

  // DESIGN.md § 6: y は 6px、stagger は 0.04s、duration は 0.3s
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.04 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {content}
    </motion.div>
  );
}
