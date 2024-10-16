import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesbordPageRoutingModule } from './desbord-routing.module';

import { DesbordPage } from './desbord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesbordPageRoutingModule
  ],
  declarations: [DesbordPage]
})
export class DesbordPageModule {}
