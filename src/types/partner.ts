export type Partner = {
  id: string;
  name: string;
  description: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  website?: string;
}; 