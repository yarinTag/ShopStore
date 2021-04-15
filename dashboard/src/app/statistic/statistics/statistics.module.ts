import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { BarComponent } from '../bar/bar.component';
import { PieComponent } from '../pie/pie.component';
import { ScatterComponent } from '../scatter/scatter.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [
      StatisticsComponent,
      BarComponent,
      PieComponent,
      ScatterComponent
    ]
})
export class StatisticsModule { }
