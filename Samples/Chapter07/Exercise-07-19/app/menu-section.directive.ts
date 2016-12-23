import {Directive} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuItemDirective} from './menu-item.directive';

@Directive({
  selector: 'menu-section',
  inputs: ['title', 'active'],
})
export class MenuSectionDirective {
  title: string;
  active: boolean;
  @ContentChildren(MenuItemDirective) items: QueryList<MenuItemDirective>;
}