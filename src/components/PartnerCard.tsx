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
    <Link href={`/partners/${partner.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="group bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center w-full shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative h-24 w-full mb-4">
          <Image
            src={partner.image.url}
            alt={partner.name}
            fill
            className="object-contain transform group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-2 relative">
          {partner.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center line-clamp-2 relative">
          {partner.description}
        </p>
        <div className="mt-4 relative">
          <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
            詳細を見る
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </motion.div>
    </Link>
  );
} 