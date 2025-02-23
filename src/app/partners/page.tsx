import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, Instagram } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'パートナー企業 | Sunlady Home',
  description: 'Sunladyのパートナー企業をご紹介します。',
};

async function getPartnersList() {
  try {
    const response = await client.getList<Partner>({
      endpoint: 'partners',
      queries: {
        orders: '-publishedAt',
        limit: 100,
      },
    });
    return response.contents;
  } catch (error) {
    console.error('パートナー企業の取得に失敗しました:', error);
    return [];
  }
}

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8 text-center">パートナー企業</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[16/9] mb-4 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={partner.image.url}
                    alt={partner.name}
                    width={partner.image.width}
                    height={partner.image.height}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                <div className="flex gap-2">
                  {partner.homepage && (
                    <Link
                      href={partner.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                    >
                      <Globe className="w-4 h-4" />
                      <span>ホームページ</span>
                    </Link>
                  )}
                  {partner.instagram && (
                    <Link
                      href={partner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}