import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListchecklistPageRoutingModule } from './listchecklist-routing.module';

import { ListchecklistPage } from './listchecklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListchecklistPageRoutingModule
  ],
  declarations: [ListchecklistPage]
})
export class ListchecklistPageModule {}
