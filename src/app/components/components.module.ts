import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';



@NgModule({
  declarations: [DashboardComponent, DashboardCardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
