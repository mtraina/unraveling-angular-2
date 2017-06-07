import {Component} from '@angular/core';
import {MenuComponent} from './menu.component';

@Component({
  selector: 'menu-item',
  template: `
    <div class="title">
      {{title}}
    </div>
  `,
  inputs: ['title'],
})
export class MenuItemComponent {
  title: string;
}