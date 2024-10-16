import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesbordPage } from './desbord.page';

const routes: Routes = [
  {
    path: '',
    component: DesbordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesbordPageRoutingModule {}
