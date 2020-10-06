import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimacionDQOPageRoutingModule } from './estimacion-dqo-routing.module';

import { EstimacionDQOPage } from './estimacion-dqo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimacionDQOPageRoutingModule
  ],
  declarations: [EstimacionDQOPage]
})
export class EstimacionDQOPageModule {}
