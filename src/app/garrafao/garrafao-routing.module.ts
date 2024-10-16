import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarrafaoPage } from './garrafao.page';

const routes: Routes = [
  {
    path: '',
    component: GarrafaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarrafaoPageRoutingModule {}
