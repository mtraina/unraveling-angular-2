import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry'; 
import {SearchBoxComponent} from './search-box.component';

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  dives = DiveLogEntry.StockDives;
}