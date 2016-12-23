import {Component} from '@angular/core';
import {OnChanges, OnInit, DoCheck} from '@angular/core';
import {AfterContentInit, AfterContentChecked} from '@angular/core';
import {AfterViewInit, AfterViewChecked} from '@angular/core';
import {OnDestroy} from '@angular/core';

import {ContentChildren, QueryList} from '@angular/core';

import {MenuSectionDirective} from './menu-section.directive';
import {MenuItemDirective} from './menu-item.directive';
 
@Component({
  selector: 'yw-menu',
  templateUrl: 'app/menu.template.html',
  styleUrls: ['app/menu.css'],
  inputs: ['useDefaultColor']
})
export class MenuComponent implements 
  OnChanges, 
  OnInit, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  useDefaultColor = true;
  selectedTitle = "none";
  static count = 0;
  @ContentChildren(MenuSectionDirective) sections: QueryList<MenuSectionDirective>;

  selectSection(section: MenuSectionDirective) {
    this.sections.toArray().forEach(s => s.active = false);
    section.active = true;
  }

  selectItem(item: MenuItemDirective) {
    this.selectedTitle = item.title;
  }

  ngOnChanges() {
    this.log('OnChanges');
  }

  ngOnInit() {
    this.log('OnInit');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
    if (this.sections.length > 0) {
      let activeSection = this.sections.filter(s => s.active);
      if (activeSection.length == 0) {
        this.sections.first.active = true;
      } else {
        activeSection[0].active = true;
      }
    }
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }

  ngOnDestroy() {
    this.log('OnDestroy');
  }

  log(message: string) {
    console.log(`${++MenuComponent.count}: ${message}`)
  }
}