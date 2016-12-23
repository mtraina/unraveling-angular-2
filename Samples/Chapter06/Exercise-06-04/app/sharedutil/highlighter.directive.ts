import {Directive, ElementRef} from '@angular/core';

@Directive({ 
  selector: '[gc-highlight]',
  inputs: ['backgroundColor: gc-highlight'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  }
})
export class HighlighterDirective {
  backgroundColor: string;

  constructor(private element: ElementRef) {
  }

  onMouseEnter() {
    this.setAppearance(this.backgroundColor || 'green', 'pointer');
  }

  onMouseLeave() {
    this.setAppearance(null, null);
  }

  setAppearance(color: string, cursor: string) {
    let style = this.element.nativeElement.style;
    style.backgroundColor = color;
    style.cursor = cursor;
  }
}