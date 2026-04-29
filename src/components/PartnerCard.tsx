'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Partner } from '@/types/partner';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Instagram } from 'lucide-react';

type PartnerCardProps = {
  partner: Partner;
  index: number;
};

export default function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="p-4 h-full flex flex-col hover:shadow-lg transition-[box-shadow,border-color] duration-300 border-2 border-opacity-10 hover:border-primary/20">
        <CardHeader className="pb-2 pt-2">
          <h3 className="text-lg font-medium line-clamp-1">{partner.name}</h3>
          {partner.subtitle && (
            <p className="text-sm text-muted-foreground line-clamp-1">{partner.subtitle}</p>
          )}
        </CardHeader>
        <CardContent className="flex-grow pb-2">
          <div className="relative w-full h-32 mb-3 bg-gray-50 rounded-md overflow-hidden">
            <Image
              src={partner.image.url}
              alt={`${partner.name}のロゴ`}
              fill
              className="object-contain p-2 hover:scale-105 transition-transform duration-300"
            />
          </div>
          {partner.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{partner.description}</p>
          )}
        </CardContent>
        <CardFooter className="pt-2 flex gap-2 justify-end">
          {partner.homelink && (
            <Button variant="outline" size="sm" asChild className="h-8">
              <Link href={partner.homelink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Globe className="w-3.5 h-3.5 mr-1" />
                <span className="text-xs">ホームページ</span>
              </Link>
            </Button>
          )}
          {partner.snslink && (
            <Button variant="outline" size="sm" asChild className="h-8">
              <Link href={partner.snslink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Instagram className="w-3.5 h-3.5 mr-1" />
                <span className="text-xs">SNS</span>
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
} 