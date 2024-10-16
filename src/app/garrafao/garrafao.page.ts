import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação
import { CartService } from '../../app/service/cart.service'; // Importe o serviço do carrinho
import { Product } from '../../app/models/product.model';

@Component({
  selector: 'app-garrafao',
  templateUrl: './garrafao.page.html',
  styleUrls: ['./garrafao.page.scss'],
})
export class GarrafaoPage implements OnInit {

  product: Product = {
    id: 2, // Adicionando o id
    name: 'Garrafão 20lts',
    price: 27.00,
    description: 'Um Garrafão de 20 litros.'
  };

  constructor(private router: Router, private cartService: CartService) { }

  voltarToGarrafao() {
    this.router.navigate(['/desbord']);
  }

  // Função para adicionar o item ao carrinho
  addToCart() {
    const existingItem = this.cartService.getCartItems().find(item => item.product.id === this.product.id);

    if (existingItem) {
      // Se já existir, verificamos a quantidade
      if (existingItem.quantity + 1 >= 10) {
        // Se for 10 ou mais, aplicamos o desconto
        this.product.price = 25.00;
      }
      // Adiciona o produto ao carrinho com a quantidade aumentada
      this.cartService.addToCart(this.product);
    } else {
      // Se não existir, adiciona normalmente
      this.cartService.addToCart(this.product);
    }

    console.log("Produto adicionado ao carrinho:", this.product);
  }

  ngOnInit() {
  }

}
