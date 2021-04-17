import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {UserEditComponent} from './user-edit.component';

const routes: Routes = [
  {
    path: 'user-edit',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UserEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEditRoutingModule { }
