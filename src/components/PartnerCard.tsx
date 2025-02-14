'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Partner } from '@/types/partner';

type PartnerCardProps = {
  partner: Partner;
  index: number;
};

export function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      <div className="p-6">
        <div className="relative h-40 mb-4 bg-gray-50 rounded-md overflow-hidden">
          <Image
            src={partner.image.url}
            alt={partner.name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">{partner.name}</h3>
        <p className="text-gray-600 line-clamp-3">{partner.subtitle}</p>
        <div className="mt-4 flex space-x-4">
          {partner.homelink && (
            <a
              href={partner.homelink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              ウェブサイト →
            </a>
          )}
          {partner.snslink && (
            <a
              href={partner.snslink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              SNS →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 