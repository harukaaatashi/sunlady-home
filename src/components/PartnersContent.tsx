'use client';

import { Partner } from '@/types/partner';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import PartnerCard from '@/components/PartnerCard';

type PartnersContentProps = {
  partners: Partner[];
};

export default function PartnersContent({ partners }: PartnersContentProps) {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <motion.h1 
        className="text-4xl font-light mb-12"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        パートナー企業
      </motion.h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <PartnerCard key={partner.id} partner={partner} index={index} />
        ))}
      </div>
    </Container>
  );
} 