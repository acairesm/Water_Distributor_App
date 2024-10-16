import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação
import { CartService } from '../../app/service/cart.service'; // Corrigido o caminho para services/cart.service.ts

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.page.html',
  styleUrls: ['./recarga.page.scss'],
})
export class RecargaPage implements OnInit {

  product = {
    id: 7,  // Exemplo de id único
    name: 'Recarga garrafão',
    price: 7.00,
    description: 'Recarga garrafão de 20lts.'  // Corrigido a descrição
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

  voltarToGarrafaoRecarga() {
    console.log("Você clicou no botão");
    this.router.navigate(['/desbord']); // Redireciona para a página "desbord"
  }


  ngOnInit() {
  }

}
