import {Injectable} from '@angular/core';

@Injectable()
export class TraceService {
  trace(message: string) {
    console.log(message);
  }
}

@Injectable()
export class AdvancedTraceService {
  info: string;

  trace(message: string) {
    console.log(`Info: ${this.info} - ${message}`);
  }
}