import {Injectable} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Injectable()
export class DiveLogApi {
  getDives() {
    return DiveLogEntry.StockDives;
  }
}