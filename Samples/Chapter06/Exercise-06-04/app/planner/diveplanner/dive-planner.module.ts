import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DivePlannerComponent} from './dive-planner.component';
import {UtilityModule} from '../../sharedutil/utility.module';

@NgModule({
  imports: [
    BrowserModule,
    UtilityModule
  ],
  declarations: [DivePlannerComponent],
  exports: [DivePlannerComponent]
})
export class DivePlannerModule { }