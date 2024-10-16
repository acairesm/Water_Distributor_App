import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router

@Component({
  selector: 'app-desbord',
  templateUrl: './desbord.page.html',
  styleUrls: ['./desbord.page.scss'],
})
export class DesbordPage implements OnInit {

  constructor(private router: Router) { }  // Injetar o Router

  navigateToGarrafao() {
    console.log("Você clicou no botão para Garrafão"); // Verifique se isso aparece no console
    this.router.navigate(['/garrafao']); // Redirecionar para a página "garrafao"
  }

  navigateToGarrafao1() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/recarga']); // Redirecionar para a página "recarga-page"
  }

  navigateToGarrafas500ml() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/garrafas500ml']); // Redirecionar para a página "recarga-page"
  }

  navigateToGarrafas350ml() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/garrafas350ml']); // Redirecionar para a página "recarga-page"
  }

  navigateToGarrafas1l() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/garrafas1l']); // Redirecionar para a página "recarga-page"
  }


  navigateToGarrafasavariadasl() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/avarias']); // Redirecionar para a página "recarga-page"
  }

  navigateToGarrafasPromocao() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/promocao']); // Redirecionar para a página "recarga-page"
  }

  navigateToGarrafasMapa() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/map']); // Redirecionar para a página "recarga-page"
  }

  navigateToGarrafaswpp() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/wpp']); // Redirecionar para a página "recarga-page"
  }

  navigateToGarrafascarrinho() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/carrinho']); // Redirecionar para a página "recarga-page"
  }
  navigateToGarrafascartao() {
    console.log("Você clicou no botão para Recarga"); // Verifique se isso aparece no console
    this.router.navigate(['/cartao']); // Redirecionar para a página "recarga-page"
  }




  ngOnInit() {
  }
}
