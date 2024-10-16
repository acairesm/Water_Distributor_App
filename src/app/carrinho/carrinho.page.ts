import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../app/service/cart.service';
import { Product } from '../../app/models/product.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  cartItems: { product: Product; quantity: number }[] = [];

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems(); // Carregar os itens do carrinho
  }

  // Função para remover um item do carrinho pelo índice
  removeFromCart(index: number) {
    this.cartService.removeFromCart(index); // Remove o item
    this.cartItems = this.cartService.getCartItems(); // Atualiza a lista de itens no carrinho
  }

  // Aumentar quantidade de um item
  increaseQuantity(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity + 1);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  // Diminuir quantidade de um item
  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(productId, item.quantity - 1);
      this.cartItems = this.cartService.getCartItems();
    } else if (item && item.quantity === 1) {
      // Se a quantidade é 1 e clicar em diminuir, remove o item
      const index = this.cartItems.findIndex(i => i.product.id === productId);
      this.removeFromCart(index);
    }
  }

  // Função para calcular o total do carrinho
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // Função para checkout
  checkout() {
    let message = "Olá! Gostaria de confirmar o meu pedido:\n\n";

    this.cartItems.forEach(item => {
      message += `${item.product.name} - ${item.quantity} x ${item.product.price.toFixed(2)}\n`;
    });

    const total = this.getTotal();
    message += `\nTotal: ${total.toFixed(2)} BRL`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '559691164161';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }

  voltarToGarrafao() {
    this.router.navigate(['/desbord']);
  }
}
