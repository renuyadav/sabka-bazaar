export type Product = {
  productName: string;
  brand: string;
  description: string;
  sku: string;
  categories: [];
  price: string;
  specialPrice: string;
  promotionText: string;
  availableQuantity: number;
  isAvailable: boolean;
  images: string[];
  packSize: string;
};
export type Category = {
  categoryID: string;
  name: string;
  children: [];
  description?: string;
  image?: string;
};
export type ProductListProps = {
  products: Product[];
  categories: Category[];
};
