import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: '[myDivelog]',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  public dives = DiveLogEntry.StockDives;
}
