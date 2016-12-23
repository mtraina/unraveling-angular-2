import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DivePlannerComponent} from './dive-planner.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [DivePlannerComponent],
  exports: [DivePlannerComponent]
})
export class DivePlannerModule { }