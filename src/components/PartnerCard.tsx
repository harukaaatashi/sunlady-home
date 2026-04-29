'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Partner } from '@/types/partner';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

type PartnerCardProps = {
  partner: Partner;
  index: number;
};

export default function PartnerCard({ partner, index }: PartnerCardProps) {
  const href = partner.homelink || partner.snslink;

  const inner = (
    <div className="border border-border hover:border-primary/30 transition-colors duration-200 flex flex-col h-full group">
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        <Image
          src={partner.image.url}
          alt={`${partner.name}のロゴ`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium leading-snug">{partner.name}</h3>
            {partner.subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5">{partner.subtitle}</p>
            )}
          </div>
          {href && (
            <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </div>
        {partner.description && (
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{partner.description}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="h-full"
      >
        <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.04 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {inner}
    </motion.div>
  );
}
