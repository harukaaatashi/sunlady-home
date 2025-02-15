'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Partner } from '@/types/partner';

type PartnerCardProps = {
  partner: Partner;
  index: number;
};

export default function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <Link href={`/partners/${partner.id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -4, shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="group bg-white rounded-xl p-6 flex flex-col items-center w-full shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="relative h-24 w-full">
          <Image
            src={partner.image.url}
            alt={partner.name}
            fill
            className="object-contain transform group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>
    </Link>
  );
} 