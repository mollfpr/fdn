export interface ProductType {
  name: string;
  rating: number;
  description: string;
  image: string;
}

export interface ArticleType {
  title: string;
  author: string;
  image: string;
  published_at: string;
}

export interface ReviewType {
  user: string;
  profile: string[];
  product: {
    image: string;
    name: string;
    desc: string;
  };
  star: number;
  comment: string;
}

export interface EditorType {
  editor: string;
  role: string;
  product: ProductType;
}
