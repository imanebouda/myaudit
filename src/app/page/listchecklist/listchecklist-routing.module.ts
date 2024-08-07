import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListchecklistPage } from './listchecklist.page';

const routes: Routes = [
  {
    path: '',
    component: ListchecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListchecklistPageRoutingModule {}
