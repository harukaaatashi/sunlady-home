import { MicroCMSImage } from '@/types/microcms';

export type Partner = {
  id: string;
  name: string;
  image: MicroCMSImage;
  subtitle: string;
  description?: string;
  homelink?: string;
  snslink?: string;
  homepage?: string;
  instagram?: string;
}; 