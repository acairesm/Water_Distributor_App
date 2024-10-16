import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação
import { CartService } from '../../app/service/cart.service'; // Importe o serviço do carrinho


@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.page.html',
  styleUrls: ['./promocao.page.scss'],
})
export class PromocaoPage implements OnInit {
  
  product = {
    id: 6,  // Adicionando um id único para o produto

    name: '10 Garrafoes 20 litros',
    price: 250.00,
    description: ' 10 unidades de Garrafões de 1l cada.'
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
