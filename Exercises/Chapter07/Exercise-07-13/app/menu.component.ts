import {Component} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuSectionComponent} from './menu-section.component';
 
@Component({
  selector: 'yw-menu',
  template: `
    <div>
      <menu-section *ngFor="let section of sections" 
        [title]="section.title">
      </menu-section>
    </div>
  `
})
export class MenuComponent {
  selectedTitle: string;

  @ContentChildren(MenuSectionComponent) sections: QueryList<MenuSectionComponent>;
}