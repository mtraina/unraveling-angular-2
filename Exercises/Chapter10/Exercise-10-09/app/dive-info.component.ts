import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-info.template.html'
})
export class DiveInfoComponent {
  public dives = DiveLogEntry.StockDives;

  avgTime() {
    let sum = 0.0;
    for (var i = 0; i < this.dives.length; i++) {
      sum += this.dives[i].time;
    }
    return sum / this.dives.length;
  }
      
  avgDepth() {
    var sum = 0.0;
    for (var i = 0; i < this.dives.length; i++) {
      sum += this.dives[i].depth;
    }
    return sum / this.dives.length;
  }
}
