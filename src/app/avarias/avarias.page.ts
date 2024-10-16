import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação
import { CartService } from '../../app/service/cart.service'; // Importe o serviço do carrinho


@Component({
  selector: 'app-avarias',
  templateUrl: './avarias.page.html',
  styleUrls: ['./avarias.page.scss'],
})
export class AvariasPage implements OnInit {

  product = {
    id: 1, // Adicionando o id
    name: 'Garrafão Avariado',
    price: 6.00,
    description: 'Garrafão avariado 20lts.'
  };


  constructor(private router: Router, private cartService: CartService) { }  

  voltarToGarrafao() {
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
