import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PlannerComponent} from './planner.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PlannerComponent],
  exports: [PlannerComponent]
})
export class PlannerModule { }