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
    <Link
      href={partner.homelink || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden p-6 h-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`${partner.name}のホームページを開く`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative w-full h-24 flex items-center justify-center"
      >
        <Image
          src={partner.image.url}
          alt={`${partner.name}のロゴ`}
          fill
          className="object-contain hover:opacity-80 transition-opacity"
        />
      </motion.div>
    </Link>
  );
} 