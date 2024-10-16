import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Garrafas1lPage } from './garrafas1l.page';

const routes: Routes = [
  {
    path: '',
    component: Garrafas1lPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Garrafas1lPageRoutingModule {}
