import {Component} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuItemComponent} from './menu-item.component';

@Component({
  selector: 'menu-section',
  template: `
    <div class="title">
      <h3>{{title}}</h3>
      <menu-item *ngFor="let item of items" 
        [title]="item.title">
      </menu-item>
    </div>
  `,
  inputs: ['title']
})
export class MenuSectionComponent {
  title: string;
  @ContentChildren(MenuItemComponent) items: QueryList<MenuItemComponent>;
}