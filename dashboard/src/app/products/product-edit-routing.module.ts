import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {ProductEditComponent} from './product-edit.component';

const routes: Routes = [
  {
    path: 'product-edit',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ProductEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductEditRoutingModule { }
