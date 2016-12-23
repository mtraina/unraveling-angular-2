import {Directive} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

@Directive({
  selector: 'menu-item',
  inputs: ['title'],
})
export class MenuItemDirective {
  title: string;
}