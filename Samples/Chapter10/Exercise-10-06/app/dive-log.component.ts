import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  public dives = DiveLogEntry.StockDives;

  avgDepth() {
    var sum = 0.0;
    for (var i = 0; i < this.dives.length; i++) {
      sum += this.dives[i].depth;
    }
    return sum / this.dives.length;
  }
}
