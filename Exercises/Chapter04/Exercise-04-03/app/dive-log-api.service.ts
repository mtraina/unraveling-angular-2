import {Injectable} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Injectable()
export class DiveLogApi {
  getDives() {
    return new Promise<DiveLogEntry[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(DiveLogEntry.StockDives);
      }, 1000);
    })
  }
}