import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Garrafas500mlPageRoutingModule } from './garrafas500ml-routing.module';

import { Garrafas500mlPage } from './garrafas500ml.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Garrafas500mlPageRoutingModule
  ],
  declarations: [Garrafas500mlPage]
})
export class Garrafas500mlPageModule {}
