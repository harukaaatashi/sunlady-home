export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
};

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