import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontrePageRoutingModule } from './montre-routing.module';

import { MontrePage } from './montre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontrePageRoutingModule
  ],
  declarations: [MontrePage]
})
export class MontrePageModule {}
