import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import { AddProductComponent } from './add-product.component';

const routes: Routes = [
  {
    path: 'add-product',
    component: MainLayoutComponent,
    children: [
      { path: '', component: AddProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductRoutingModule { }
