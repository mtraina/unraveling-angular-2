import {Component, AfterContentInit} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuSectionDirective} from './menu-section.directive';
import {MenuItemDirective} from './menu-item.directive';
 
@Component({
  selector: 'yw-menu',
  templateUrl: 'app/menu.template.html',
  styleUrls: ['app/menu.css']


})
export class MenuComponent implements AfterContentInit {
  selectedTitle: string;

  @ContentChildren(MenuSectionDirective) sections: QueryList<MenuSectionDirective>;

  ngAfterContentInit() {
    if (this.sections.length > 0) {
      let activeSection = this.sections.filter(s => s.active);
      if (activeSection.length == 0) {
        this.sections.first.active = true;
      } else {
        activeSection[0].active = true;
      }
    }
  }

  selectSection(section: MenuSectionDirective) {
    this.sections.toArray().forEach(s => s.active = false);
    section.active = true;
  }

  selectItem(item: MenuItemDirective) {
    this.selectedTitle = item.title;
  }
}