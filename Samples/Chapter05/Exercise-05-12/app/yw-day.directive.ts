import {Directive} from '@angular/core'
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ 
  selector: '[ywDay]',
  inputs: ['ywDay'] 
})
export class DayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  set ywDay(ruleType: string) {
    if (ruleType == 'day') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}