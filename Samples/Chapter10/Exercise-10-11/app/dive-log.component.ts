import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';
import {ContentFilterPipe} from './content-filter.pipe'

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  public dives = DiveLogEntry.StockDives; 

  addDives() {
    DiveLogEntry.ExtraDives.forEach(item => {
      this.dives.push(item);
    });
  }
}
