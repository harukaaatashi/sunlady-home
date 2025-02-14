export type News = {
  id: string;
  title: string;
  content: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  updatedAt: string;
}; 