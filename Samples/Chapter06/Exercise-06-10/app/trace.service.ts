import {Injectable} from '@angular/core';

@Injectable()
export class TraceService {
  trace(message: string) {
    console.log(message);
  }
}