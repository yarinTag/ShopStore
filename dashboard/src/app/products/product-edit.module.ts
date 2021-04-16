import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ProductEditRoutingModule
  ],
  declarations: [ProductEditComponent]
})
export class ProductEditModule { }
