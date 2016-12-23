import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveRulesComponent} from './dive-rules.component';
import {RuleTypeDirective} from './yw-rule-type.directive';
import {RuleDirective} from './yw-rule.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveRulesComponent,
    RuleTypeDirective,
    RuleDirective
  ],
  bootstrap: [DiveRulesComponent]
})
export class AppModule { }