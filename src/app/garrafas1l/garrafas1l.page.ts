import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação
import { CartService } from '../../app/service/cart.service'; // Importe o serviço do carrinho



@Component({
  selector: 'app-garrafas1l',
  templateUrl: './garrafas1l.page.html',
  styleUrls: ['./garrafas1l.page.scss'],
})
export class Garrafas1lPage implements OnInit {

  product = {
    id: 3, // Adicionando o id

    name: 'Pacote Garrafas 1l',
    price: 11.00,
    description: 'Pacote com 6 unidades de água de 1ml cada.'
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
