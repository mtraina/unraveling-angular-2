import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';
import {ContentFilterPipe} from './content-filter.pipe'

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  dives = DiveLogEntry.StockDives;
  search: string; 

  myself() : DiveLogComponent {
    return this;
  }

  addDives() {
    this.dives = this.dives.slice(0);
    DiveLogEntry.ExtraDives.forEach(item => {
      this.dives.push(item);
    });
  }
}
