import {Directive, Input} from '@angular/core'
import {TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({ 
  selector: '[ywNight]'
})
export class NightDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set ywNight(ruleType: string) {
    if (ruleType == 'night') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}