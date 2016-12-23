import {Directive, ElementRef} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Directive({ 
  selector: '[ywSelectable]',
  inputs: [
    'hoverColor: ywSelectable',
    'itemId: ywId'
  ],
  outputs: ['onSelectionChanged'],
  host: {
    '[class.selected]': 'selected()',
    '[style.padding.px]': 'extraPadding()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()'
  }
})
export class SelectableDirective {
  hoverColor: string;
  itemId: number;
  onSelectionChanged = new EventEmitter<string>();
  isSelected: boolean;
  childSpan: HTMLElement;

  constructor(private element: ElementRef) {
    this.isSelected = false;
    this.childSpan = document.createElement('span');
    element.nativeElement.appendChild(this.childSpan);
  }

  selected() { return this.isSelected; }
  extraPadding() { return 4; }

  onMouseEnter() {
    this.setAppearance(this.hoverColor, 'pointer');
  }

  onMouseLeave() {
    this.setAppearance(null, null);
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.onSelectionChanged.emit(`${this.itemId}:${this.isSelected}`);
    this.childSpan.textContent = this.isSelected ? "(!) " : "";
  }

  setAppearance(color: string, cursor: string) {
    let style = this.element.nativeElement.style;
    style.backgroundColor = color;
    style.cursor = cursor;
  }
}