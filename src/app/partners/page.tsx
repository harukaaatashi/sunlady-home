import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import { Container } from '@/components/ui/container';
import PartnersContent from '@/components/PartnersContent';

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

export default async function PartnersPage() {
  const partners = await getPartnersList();

  return (
    <Container>
      <PartnersContent partners={partners} />
    </Container>
  );
}