import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarrafaoPageRoutingModule } from './garrafao-routing.module';

import { GarrafaoPage } from './garrafao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarrafaoPageRoutingModule
  ],
  declarations: [GarrafaoPage]
})
export class GarrafaoPageModule {}
