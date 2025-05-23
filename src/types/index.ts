export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  features: string[];
  specifications: {
    dimensions: string;
    capacity: string;
    energyRating: string;
    color: string;
    weight: string;
  };
  inStock: boolean;
  isOnSale: boolean;
  discountPercentage: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
  orders: Order[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}