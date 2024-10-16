import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Garrafas350mlPageRoutingModule } from './garrafas350ml-routing.module';

import { Garrafas350mlPage } from './garrafas350ml.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Garrafas350mlPageRoutingModule
  ],
  declarations: [Garrafas350mlPage]
})
export class Garrafas350mlPageModule {}
