import {Directive, ElementRef} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {HostListener, HostBinding} from '@angular/core';

@Directive({ 
  selector: '[ywSelectable]',
})
export class SelectableDirective {
  @Input('ywSelectable') hoverColor: string;
  @Input('ywId') itemId: number;
  @Output() onSelectionChanged = new EventEmitter<string>();
  isSelected: boolean;
  childSpan: HTMLElement;

  constructor(private element: ElementRef) {
    this.isSelected = false;
    this.childSpan = document.createElement('span');
    element.nativeElement.appendChild(this.childSpan);
  }

  @HostBinding('class.selected') get selected() { return this.isSelected; }
  @HostBinding('style.padding.px') get extraPadding() { return 4; }

  @HostListener('mouseenter') onMouseEnter() {
    this.setAppearance(this.hoverColor, 'pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setAppearance(null, null);
  }

  @HostListener('click') onClick() {
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