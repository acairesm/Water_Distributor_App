import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


  constructor(private router: Router) { }  

  voltarToGarrafao() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/desbord']); // Redireciona para a página "garrafao"
  }

  ngOnInit() {
  }

}
