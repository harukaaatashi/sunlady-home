export type { News } from './news';

export type Partner = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  description: string;
  logo?: {
    url: string;
    width: number;
    height: number;
  };
}; 