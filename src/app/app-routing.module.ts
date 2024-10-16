import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'desbord',
    loadChildren: () => import('./desbord/desbord.module').then( m => m.DesbordPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'garrafao',
    loadChildren: () => import('./garrafao/garrafao.module').then( m => m.GarrafaoPageModule)
  },
  {
    path: 'recarga',
    loadChildren: () => import('./recarga/recarga.module').then( m => m.RecargaPageModule)
  },
  {
    path: 'garrafas350ml',
    loadChildren: () => import('./garrafas350ml/garrafas350ml.module').then( m => m.Garrafas350mlPageModule)
  },
  {
    path: 'garrafas500ml',
    loadChildren: () => import('./garrafas500ml/garrafas500ml.module').then( m => m.Garrafas500mlPageModule)
  },
  {
    path: 'garrafas1l',
    loadChildren: () => import('./garrafas1l/garrafas1l.module').then( m => m.Garrafas1lPageModule)
  },
  {
    path: 'avarias',
    loadChildren: () => import('./avarias/avarias.module').then( m => m.AvariasPageModule)
  },
  {
    path: 'promocao',
    loadChildren: () => import('./promocao/promocao.module').then( m => m.PromocaoPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'wpp',
    loadChildren: () => import('./wpp/wpp.module').then( m => m.WppPageModule)
  },
  {
    path: 'cartao',
    loadChildren: () => import('./cartao/cartao.module').then( m => m.CartaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
