import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando o Router para navegação

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
})
export class CartaoPage implements OnInit {

  constructor(private router: Router) { }  

  // Função para voltar para a página anterior
  voltarToGarrafao() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/desbord']); // Redireciona para a página "garrafao"
  }

  // Função para copiar o CNPJ para a área de transferência
  copyCNPJ() {
    const cnpjValue = document.getElementById('cnpj-value')?.textContent;
    if (cnpjValue) {
      navigator.clipboard.writeText(cnpjValue).then(() => {
        alert('CNPJ copiado: ' + cnpjValue);
      }).catch(err => {
        console.error('Erro ao copiar o CNPJ', err);
      });
    }
  }

  ngOnInit() {
  }

}
