import {Component, AfterViewInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry'; 
import {SearchBoxComponent} from './search-box.component';

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent implements AfterViewInit {
  @ViewChild(SearchBoxComponent) searchBox: SearchBoxComponent;
  dives = DiveLogEntry.StockDives;

  searchFor(key: string) {
    this.searchBox.searchText = key;
    console.log(`New search text: ${this.searchBox.searchText}`)
  }

  ngAfterViewInit() {
    if (this.searchBox) console.log('searchBox initialized.')
  }
}