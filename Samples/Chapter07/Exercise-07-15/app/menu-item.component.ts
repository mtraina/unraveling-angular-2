import {Component} from '@angular/core';
import {ContentChild, ContentChildren, QueryList} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {MenuComponent} from './menu.component';

@Component({
  selector: 'menu-item',
  template: `
    <div class="title"
      [class.last]="last"
      (click)="select()">
      {{title}}
    </div>
  `,
  styles: [`
    .title {
      background-color: #e0e0e0;
      border: 1px solid darkgray;
      border-bottom: 0;
      color: navy;
      font-size: 1.2em;
      padding: 8px 16px;
      cursor: pointer;
    }
    .title:hover {
      background-color: #c0c0c0;
    }
    .last {
      border-bottom: 1px solid darkgray;
    }
  `],
  inputs: ['title', 'last'],
  outputs: ['onSelected']
})
export class MenuItemComponent {
  title: string;
  last: boolean;
  onSelected = new EventEmitter<string>();

  select() {
    this.onSelected.emit(this.title);
  }
}