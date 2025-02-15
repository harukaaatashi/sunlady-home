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
        <div className="relative h-32 w-full mb-4">
          <Image
            src={partner.image.url}
            alt={partner.name}
            fill
            className="object-contain transform group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors">
          {partner.name}
        </h3>
        {partner.subtitle && (
          <p className="mt-2 text-sm text-gray-600 text-center line-clamp-2">
            {partner.subtitle}
          </p>
        )}
        <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          詳細を見る
          <svg
            className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
} 