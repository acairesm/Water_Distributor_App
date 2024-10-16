import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvariasPage } from './avarias.page';

const routes: Routes = [
  {
    path: '',
    component: AvariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvariasPageRoutingModule {}
