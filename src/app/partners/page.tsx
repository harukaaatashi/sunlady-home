'use client';

import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Instagram } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'パートナー企業 | Sunlady Home',
  description: 'Sunladyのパートナー企業をご紹介します。',
};

export const revalidate = 60; // 1分ごとに再検証

async function getPartnersList() {
  try {
    // まず総件数を取得
    const totalResponse = await client.getList<Partner>({
      endpoint: 'partner',
      queries: { limit: 0 }
    });

    const allPartners = [];
    const limit = 100; // 1回のリクエストで取得する最大件数
    const totalCount = totalResponse.totalCount;

    // 全件を取得
    for (let offset = 0; offset < totalCount; offset += limit) {
      const response = await client.getList<Partner>({
        endpoint: 'partner',
        queries: {
          orders: 'createdAt', // 古い順
          limit,
          offset,
        },
      });
      allPartners.push(...response.contents);
    }

    return allPartners;
  } catch (error) {
    console.error('パートナー企業の取得に失敗しました:', error);
    return [];
  }
}

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        パートナー企業
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{partner.name}</CardTitle>
                {partner.subtitle && (
                  <p className="text-sm text-muted-foreground">{partner.subtitle}</p>
                )}
              </CardHeader>
              {partner.image && (
                <CardContent>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={partner.image.url}
                      alt={`${partner.name}のロゴ`}
                      fill
                      className="object-contain transform hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {partner.description && (
                    <p className="mt-4 text-muted-foreground">{partner.description}</p>
                  )}
                </CardContent>
              )}
              {(partner.homelink || partner.snslink) && (
                <CardFooter className="mt-auto flex gap-2">
                  {partner.homelink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={partner.homelink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        ホームページ
                      </Link>
                    </Button>
                  )}
                  {partner.snslink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={partner.snslink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Instagram className="w-4 h-4 mr-2" />
                        SNS
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}