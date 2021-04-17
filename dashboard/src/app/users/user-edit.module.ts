import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserEditRoutingModule
  ],
  declarations: [UserEditComponent]
})
export class UserEditModule { }
