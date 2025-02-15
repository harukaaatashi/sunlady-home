export type Partner = {
  id: string;
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  subtitle: string;
  description?: string;
  homelink?: string;
  snslink?: string;
}; 