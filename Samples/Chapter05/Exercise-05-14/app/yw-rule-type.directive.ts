import {Directive, Host} from '@angular/core'
import {TemplateRef, ViewContainerRef} from '@angular/core';
import {RuleDirective} from './yw-rule.directive';
import {RuleView} from './rule-view';

@Directive({ 
  selector: '[ywDay],[ywNight]',
  inputs: ['ywDay', 'ywNight'] 
})
export class RuleTypeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Host() private ruleDirective: RuleDirective
    ) { }

  set ywDay(ignored) {
    this.register(true);
  }

  set ywNight(ignored) {
    this.register(false);
  }

  register(isDay: boolean) {
    this.ruleDirective.registerView(isDay,
      new RuleView(this.viewContainer, this.templateRef));
  }
}