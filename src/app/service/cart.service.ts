import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; // Importando a interface Product

@Injectable({
  providedIn: 'root' // Isso torna o serviço disponível globalmente
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = []; // Carrinho que agora contém produtos e suas quantidades

  constructor() {}

  // Adicionar ou atualizar um produto no carrinho
  addToCart(product: Product) {
    // Verificar se o produto já está no carrinho
    const existingItem = this.cart.find(item => item.product.id === product.id);

    if (existingItem) {
      // Se o produto já existir, aumente a quantidade
      existingItem.quantity += 1;
      
      // Verifica se o produto é o garrafão e ajusta o preço
      if (existingItem.product.id === 2 && existingItem.quantity >= 10) {
        existingItem.product.price = 25.00; // Altera o preço se a quantidade for 10 ou mais
      }
    } else {
      // Caso contrário, adicione o produto ao carrinho com quantidade 1
      this.cart.push({ product, quantity: 1 });
      
      // Ajusta o preço para o garrafão se for o primeiro item e atingir 10 unidades
      if (product.id === 2 && 1 >= 10) {
        product.price = 25.00; // Altera o preço se a quantidade for 10 ou mais
      }
    }
  }

  // Obter os itens do carrinho
  getCartItems() {
    return this.cart;
  }

  // Remover um item do carrinho pelo índice
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  // Limpar todos os itens do carrinho
  clearCart() {
    this.cart = [];
    return this.cart;
  }

  // Obter o total do carrinho (soma preço * quantidade)
  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // Atualizar a quantidade de um produto no carrinho
  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;

      // Ajusta o preço do garrafão se a quantidade for maior ou igual a 10
      if (item.product.id === 2 && item.quantity >= 10) {
        item.product.price = 25.00; // Preço alterado para 25.00 se 10 ou mais
      } else if (item.product.id === 2 && item.quantity < 10) {
        item.product.price = 27.00; // Preço revertido para 27.00 se a quantidade for menos de 10
      }
    }
  }
}
