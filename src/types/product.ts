export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  comparePrice?: number;
  image: string;
  inStock: boolean;
  quantity: number;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
