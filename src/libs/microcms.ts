import { createClient, MicroCMSQueries } from 'microcms-js-sdk';
import { mockNews, mockPartners } from './mock-data';

const isDev = !process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY;

const realClient = isDev
  ? null
  : createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
      apiKey: process.env.MICROCMS_API_KEY!,
    });

const mockData: Record<string, unknown[]> = {
  news: mockNews,
  partner: mockPartners,
};

function createMockClient() {
  return {
    async getList<T>({ endpoint, queries }: { endpoint: string; queries?: MicroCMSQueries }) {
      const all = (mockData[endpoint] ?? []) as T[];
      const offset = queries?.offset ?? 0;
      const limit = queries?.limit ?? all.length;
      const contents = all.slice(offset, offset + limit);
      return { contents, totalCount: all.length };
    },
    async get<T>({ endpoint, contentId }: { endpoint: string; contentId: string }) {
      const all = (mockData[endpoint] ?? []) as (T & { id: string })[];
      const item = all.find((d) => d.id === contentId);
      if (!item) throw new Error(`Mock: ${endpoint}/${contentId} not found`);
      return item as T;
    },
  };
}

export const client = isDev ? createMockClient() : realClient!;
