import type { MicroCMSImage } from "microcms-js-sdk";

export type News = {
  id: string;
  title: string;
  description: string;
  content: string;
  image: MicroCMSImage;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
  createdAt: string;
}; 