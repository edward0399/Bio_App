import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimacionDQOPage } from './estimacion-dqo.page';

const routes: Routes = [
  {
    path: '',
    component: EstimacionDQOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimacionDQOPageRoutingModule {}
