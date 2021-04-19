import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontrePage } from './montre.page';

const routes: Routes = [
  {
    path: '',
    component: MontrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontrePageRoutingModule {}
