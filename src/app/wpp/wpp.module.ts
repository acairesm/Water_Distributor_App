import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WppPageRoutingModule } from './wpp-routing.module';

import { WppPage } from './wpp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WppPageRoutingModule
  ],
  declarations: [WppPage]
})
export class WppPageModule {}
