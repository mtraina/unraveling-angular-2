import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveRulesComponent} from './dive-rules.component';
import {RuleTypeDirective} from './yw-rule-type.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveRulesComponent,
    RuleTypeDirective
  ],
  bootstrap: [DiveRulesComponent]
})
export class AppModule { }