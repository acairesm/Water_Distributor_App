// src/app/pages/garrafas350ml/garrafas350ml.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../app/service/cart.service'; // Importe o serviço do carrinho

@Component({
  selector: 'app-garrafas350ml',
  templateUrl: './garrafas350ml.page.html',
  styleUrls: ['./garrafas350ml.page.scss'],
})
export class Garrafas350mlPage implements OnInit {

  product = {
    id: 4, // Adicionando o id
    name: 'Pacote Garrafas 350ml',
    price: 11.00,
    description: 'Pacote com 6 unidades de água de 350ml cada.'
  };

  constructor(private router: Router, private cartService: CartService) { }  

  voltarToGarrafao350ml() {
    this.router.navigate(['/desbord']);
  }

  // Função para adicionar o item ao carrinho
  addToCart() {
    this.cartService.addToCart(this.product);
    console.log("Produto adicionado ao carrinho:", this.product);
  }

  ngOnInit() {
  }

}
