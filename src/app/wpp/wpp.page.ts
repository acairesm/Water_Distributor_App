import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação

@Component({
  selector: 'app-wpp',
  templateUrl: './wpp.page.html',
  styleUrls: ['./wpp.page.scss'],
})
export class WppPage implements OnInit {

  constructor(private router: Router) { }  

  voltarToGarrafao() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/desbord']); // Redireciona para a página "garrafao"
  }

  ngOnInit() {
  }

}
