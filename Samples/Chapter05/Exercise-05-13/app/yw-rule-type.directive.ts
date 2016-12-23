import {Directive} from '@angular/core'
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ 
  selector: '[ywDay],[ywNight]',
  inputs: ['ywDay', 'ywNight'] 
})
export class RuleTypeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  set ywDay(ruleType: string) {
    this.createOrDestroy(ruleType == 'day');
  }

  set ywNight(ruleType: string) {
    this.createOrDestroy(ruleType != 'day');
  }

  createOrDestroy(create: boolean) {
    if (create) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}