import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WppPage } from './wpp.page';

const routes: Routes = [
  {
    path: '',
    component: WppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WppPageRoutingModule {}
