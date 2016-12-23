import {TemplateRef, ViewContainerRef} from '@angular/core';

export class RuleView {
  constructor(
    private viewContainerRef: ViewContainerRef, 
    private templateRef: TemplateRef<Object>) {}

  create() { 
    this.viewContainerRef.createEmbeddedView(this.templateRef); 
  }

  destroy() { 
    this.viewContainerRef.clear(); 
  }
}