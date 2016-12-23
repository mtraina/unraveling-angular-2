import {Component, ViewChildren, QueryList} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {GearItem} from './gear-item';
import {GearItemComponent} from './gear-item.component';

@Component({
  selector: 'dive-gear',
  templateUrl: 'app/dive-gear.template.html'
})
export class DiveGearComponent implements AfterViewInit {
  dbItems: GearItem[] = [
    {id: 1, name: 'Technisub Look mask' },
    {id: 2, name: 'Cressy fins' },
    {id: 3, name: 'Aqualung TechSuit' },
    {id: 4, name: 'Oceanic Pro BCD' },
    {id: 5, name: 'Scubapro regulator' },
    {id: 6, name: 'Suunto D9 computer' },
    {id: 7, name: 'Coltrisub cylinder' },
  ]

  gearItems: GearItem[];
  @ViewChildren(GearItemComponent) gearsInList: QueryList<GearItemComponent>;
  initialList: GearItemComponent[] = [];
  queryCount = 0; 
  listChangeCount = 0;
  itemChangeCount = 0;

  constructor() {
    this.requery();
  }

  requery() {
    this.queryCount++;
    let newQuery = [];
    for (let i = 0; i < this.dbItems.length; i++) {
      newQuery.push({
        id: this.dbItems[i].id,
        name: this.dbItems[i].name
      })
    }
    this.gearItems = newQuery;
  }

  reverse() {
    let newQuery = [];
    for (let i = this.gearItems.length - 1; i >= 0; i--) {
      newQuery.push({
        id: this.gearItems[i].id,
        name: this.gearItems[i].name
      })
    }
    this.gearItems = newQuery;
  }

  ngAfterViewInit() {
    this.initialList = this.gearsInList.toArray();
    this.gearsInList.changes.subscribe((changes: any) => {
      let changesArray = changes.toArray();
      let itemChanges = 0;
      for (let i = 0; i < changesArray.length; i++) {
        let isIdentical = this.initialList.find(g => g === changesArray[i]);
        if (!isIdentical) itemChanges++;        
      }
      setTimeout(() => {
        this.listChangeCount++;
        this.itemChangeCount += itemChanges; 
      }, 0);
    })
  }
}