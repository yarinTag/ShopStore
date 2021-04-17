import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { AddProductRoutingModule } from './add-procuct-routing.modules';


@NgModule({
  imports: [
    CommonModule,
    AddProductRoutingModule
  ],
  declarations: [AddProductComponent]
})
export class AddProductModule { }
