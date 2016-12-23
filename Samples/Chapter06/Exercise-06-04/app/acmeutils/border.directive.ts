import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Directive({ 
  selector: '[acme-border]',
  inputs: ['color: acme-border'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  }
})
export class BorderDirective {
  color: string;

  constructor(private element: ElementRef) {
  }

  onMouseEnter() {
    this.setAppearance(this.color || 'white', 'pointer');
  }

  onMouseLeave() {
    this.setAppearance(null, null);
  }

  setAppearance(color: string, cursor: string) {
    let style = this.element.nativeElement.style;
    style.border = color ? "8px solid " + color : null;
    style.cursor = cursor;
  }
}