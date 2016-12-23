import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveRulesComponent} from './dive-rules.component';
import {DayDirective} from './yw-day.directive';
import {NightDirective} from './yw-night.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveRulesComponent,
    DayDirective,
    NightDirective
  ],
  bootstrap: [DiveRulesComponent]
})
export class AppModule { }