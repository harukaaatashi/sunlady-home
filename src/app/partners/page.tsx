'use client';

import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import Image from 'next/image';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

export const revalidate = 60; // 1分ごとに再検証

async function getPartnersList() {
  try {
    const totalResponse = await client.getList<Partner>({
      endpoint: 'partner',
      queries: { limit: 0 }
    });

    const allPartners = [];
    const limit = 100;
    const totalCount = totalResponse.totalCount;

    for (let offset = 0; offset < totalCount; offset += limit) {
      const response = await client.getList<Partner>({
        endpoint: 'partner',
        queries: {
          orders: 'createdAt',
          limit,
          offset,
        },
      });
      allPartners.push(...response.contents);
    }

    return allPartners;
  } catch (error) {
    console.error('パートナーの取得に失敗しました:', error);
    return [];
  }
}

function LoadingPartners() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <Card key={index} className="animate-pulse">
          <CardContent className="p-6">
            <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <Container>
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
    </Container>
  );
}