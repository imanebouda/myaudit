import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListauditPageRoutingModule } from './listaudit-routing.module';

import { ListauditPage } from './listaudit.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListauditPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListauditPage]
})
export class ListauditPageModule {}
