import {Injectable} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Injectable()
export class DiveLogApi {
  static counter = 0;
  getDives() {
    return new Promise<DiveLogEntry[]>((resolve, reject) => {
      setTimeout(() => {
        if(DiveLogApi.counter % 3 == 0){
          reject(`Error: Call counter is ${DiveLogApi.counter}`);
        } else {
          resolve(DiveLogEntry.StockDives);
        }
      }, 1000);
    })
  }
}