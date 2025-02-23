import { client } from '@/libs/microcms';
import { Partner } from '@/types/partner';
import PartnersContent from '@/components/PartnersContent';

async function getPartnersList() {
  try {
    const response = await client.getList<Partner>({
      endpoint: 'partner',
      queries: {
        orders: 'createdAt',
        limit: 100,
      },
    });
    return response.contents;
  } catch (error) {
    console.error('パートナー企業の取得に失敗しました:', error);
    console.error('エラーの詳細:', error);
    return [];
  }
}

export default async function PartnersPage() {
  const partners = await getPartnersList();
  return <PartnersContent partners={partners} />;
}