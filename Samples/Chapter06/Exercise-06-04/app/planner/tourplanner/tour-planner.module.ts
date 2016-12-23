import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TourPlannerComponent} from './tour-planner.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [TourPlannerComponent],
  exports: [TourPlannerComponent]
})
export class TourPlannerModule { }