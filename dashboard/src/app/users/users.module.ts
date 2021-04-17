import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SearchfilterPipe } from '../searchfilter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    
  ],
  declarations: [UsersComponent,SearchfilterPipe]
})
export class UsersModule { }
