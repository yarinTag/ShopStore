import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {OrderEditComponent} from './order-edit.component';

const routes: Routes = [
  {
    path: 'order-edit',
    component: MainLayoutComponent,
    children: [
      { path: '', component: OrderEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderEditRoutingModule { }
