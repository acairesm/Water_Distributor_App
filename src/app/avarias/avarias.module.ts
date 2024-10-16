import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvariasPageRoutingModule } from './avarias-routing.module';

import { AvariasPage } from './avarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvariasPageRoutingModule
  ],
  declarations: [AvariasPage]
})
export class AvariasPageModule {}
