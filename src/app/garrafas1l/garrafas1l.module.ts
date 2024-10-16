import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Garrafas1lPageRoutingModule } from './garrafas1l-routing.module';

import { Garrafas1lPage } from './garrafas1l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Garrafas1lPageRoutingModule
  ],
  declarations: [Garrafas1lPage]
})
export class Garrafas1lPageModule {}
