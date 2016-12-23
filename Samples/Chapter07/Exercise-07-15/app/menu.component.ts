import {Component, AfterContentInit} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuSectionComponent} from './menu-section.component';
 
@Component({
  selector: 'yw-menu',
  templateUrl: 'app/menu.template.html'
})
export class MenuComponent implements AfterContentInit {
  selectedTitle: string;

  @ContentChildren(MenuSectionComponent) sections: QueryList<MenuSectionComponent>;

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

  selectSection(section: MenuSectionComponent) {
    this.sections.toArray().forEach(s => s.active = false);
    section.active = true;
  }

  selectItem(title: string) {
    this.selectedTitle = title;
  }
}