'use client';

import { Partner } from '@/types/partner';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

type PartnersContentProps = {
  partners: Partner[];
};

export default function PartnersContent({ partners }: PartnersContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">パートナー企業</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {partners.map((partner) => (
          <Card key={partner.id} className="group overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src={partner.image.url}
                  alt={partner.name}
                  width={partner.image.width}
                  height={partner.image.height}
                  className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </h2>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {partner.subtitle}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
} 