import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  public dives: DiveLogEntry[] = [];
  private _index = 0;
  private _stockDives = DiveLogEntry.StockDives;

  public enableAdd() {
    return this._index < this._stockDives.length;
  }

  public addDive() {
    if (this.enableAdd()) {
      this.dives.push(this._stockDives[this._index++]);
    }
  }

  public clearDives() {
    this.dives = [];
    this._index = 0;
  } 
}