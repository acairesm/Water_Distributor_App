import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Garrafas500mlPage } from './garrafas500ml.page';

const routes: Routes = [
  {
    path: '',
    component: Garrafas500mlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Garrafas500mlPageRoutingModule {}
