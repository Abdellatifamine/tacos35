// src/types.ts

export interface Product {
  img: string;
  name: string;
  price: string;
}

export interface CartItem extends Product {
  quantity: number;
}