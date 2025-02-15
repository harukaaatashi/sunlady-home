'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Partner } from '@/types/partner';

type PartnerCardProps = {
  partner: Partner;
  index: number;
};

export default function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-4 flex flex-col items-center w-48 mx-2"
    >
      <div className="relative h-24 w-full mb-2">
        <Image
          src={partner.image.url}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900 text-center">{partner.name}</h3>
    </motion.div>
  );
} 