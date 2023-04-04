export type ProductItems = {
  id: number;
  main_image: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  title: string;
};

export type ProductApi = {
  id: number;
  category: { name: string; image: string };
  description: string;
  images: string[];
  price: number;
  title: string;
};

export const normolizeProducts = (from: ProductApi): ProductItems => ({
  id: from.id,
  main_image: from.category.image,
  category: from.category.name,
  description: from.description,
  images: from.images,
  price: from.price,
  title: from.title,
});
