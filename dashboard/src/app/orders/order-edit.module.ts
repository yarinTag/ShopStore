import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderEditRoutingModule } from './order-edit-routing.module';
import { OrderEditComponent } from './order-edit.component';

@NgModule({
  imports: [
    CommonModule,
    OrderEditRoutingModule
  ],
  declarations: [OrderEditComponent]
})
export class OrderEditModule { }
