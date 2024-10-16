import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação
import { CartService } from '../../app/service/cart.service'; // Corrigido o caminho para services/cart.service.ts

@Component({
  selector: 'app-garrafas500ml',
  templateUrl: './garrafas500ml.page.html',
  styleUrls: ['./garrafas500ml.page.scss'],
})
export class Garrafas500mlPage implements OnInit {

  product = {
    id: 5, // Adicionando o id
    name: 'Pacote Garrafas 500ml',
    price: 11.00,
    description: 'Pacote com 6 unidades de água de 500ml cada.'  // Corrigido a descrição
  };

  constructor(
    private router: Router,
    private cartService: CartService // Injeção do CartService
  ) { }  

  // Função para adicionar o item ao carrinho
  addToCart() {
    this.cartService.addToCart(this.product);
    console.log("Produto adicionado ao carrinho:", this.product);
  }

  voltarToGarrafao500ml() {
    console.log("Você clicou no botão");
    this.router.navigate(['/desbord']); // Redireciona para a página "desbord"
  }

  ngOnInit() {
  }

}
