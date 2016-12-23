import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveLogComponent} from './dive-log.component';
import {PlannerComponent} from './planner.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveLogComponent,
    PlannerComponent
  ],
  bootstrap: [
    DiveLogComponent,
    PlannerComponent
  ]
})
export class AppModule { }