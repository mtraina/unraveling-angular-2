import {Component, ElementRef} from '@angular/core';
import {ContentChild, ContentChildren, QueryList} from '@angular/core';
import {HnDirective} from './hn.directive';
import {HeaderDirective} from './header.directive';

@Component({
  selector: 'yw-toc',
  template: `
    <div>
      <h2>{{header.text}}</h2>
      <div *ngFor="let element of getFilteredElements()"
        [style.padding-left.px]="40*(element.level-1)"
        [style.font-size.em]="1.8-(element.level-1)*0.25">
        {{element.text}}
      </div>
    </div>
  `,
  inputs: ['level']
})
export class TocComponent {
  @ContentChild(HeaderDirective) header;
  @ContentChildren(HnDirective) elements: QueryList<HnDirective>;
  level = 2;
  
  getFilteredElements() {
    return this.elements.toArray().filter(e => e.level <= this.level);
  }
}