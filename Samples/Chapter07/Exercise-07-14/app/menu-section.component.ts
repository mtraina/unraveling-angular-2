import {Component} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuItemComponent} from './menu-item.component';

@Component({
  selector: 'menu-section',
  template: `
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <ng-content></ng-content>
  `,
  inputs: ['title']
})
export class MenuSectionComponent {
  title: string;
  @ContentChildren(MenuItemComponent) items: QueryList<MenuItemComponent>;
}