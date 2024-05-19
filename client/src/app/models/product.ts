export interface Product {
    id: number;
  name: string;
  description: string;
  price: number;
  pictureURI: string;
  type?: string;
  brand?: string;
  quantityInStock?: number;
}