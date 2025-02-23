import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      <h1 className="text-3xl font-bold mb-8 text-center">パートナー企業</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <Card key={partner.id} className="overflow-hidden">
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
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {partner.description && (
                  <p className="mt-4 text-muted-foreground">{partner.description}</p>
                )}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Container>
  );
}