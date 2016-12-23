import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PlannerComponent} from './planner.component';
import {TourPlannerModule} from './tourplanner/tour-planner.module';
import {DivePlannerModule} from './diveplanner/dive-planner.module';

@NgModule({
  imports: [
    BrowserModule,
    TourPlannerModule,
    DivePlannerModule
  ],
  declarations: [PlannerComponent],
  exports: [PlannerComponent]
})
export class PlannerModule { }