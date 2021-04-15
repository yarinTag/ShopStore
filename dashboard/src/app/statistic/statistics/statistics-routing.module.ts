import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../../layout/main-layout/main-layout.component';
import {StatisticsComponent} from './statistics.component';

const routes: Routes = [
  {
    path: 'statistics',
    component: MainLayoutComponent,
    children: [
      { path: '', component: StatisticsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
