import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Garrafas350mlPage } from './garrafas350ml.page';

const routes: Routes = [
  {
    path: '',
    component: Garrafas350mlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Garrafas350mlPageRoutingModule {}
