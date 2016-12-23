import {Component} from '@angular/core';
import {ContentChild, ContentChildren, QueryList} from '@angular/core';

import {MenuItemComponent} from './menu-item.component';

@Component({
  selector: 'menu-section',
  template: `
    <div class="title">{{title}}</div>
    <ng-content></ng-content>
  `,
  styles: [`
    .title {
      background-color: navy;
      border: 1px solid #808020;
      border-bottom: 0;
      color: white;
      font-size: 1.5em;
      padding: 8px 16px;
      cursor: pointer;
    }

    .title:hover {
      background-color: #404080;
    }

    .last {
      border-bottom: 1px solid #808020;
    }

  `],
  inputs: ['title', 'last', 'active']
})
export class MenuSectionComponent {
  title: string;
  last: boolean;
  active = false;
  @ContentChildren(MenuItemComponent) items: QueryList<MenuItemComponent>;
}