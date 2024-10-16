// src/app/models/cart-item.model.ts
import { Product } from './product.model';  // Importe o modelo de Produto

export interface CartItem {
  product: Product;  // O produto que está no carrinho
  quantity: number; // A quantidade do produto no carrinho
}
