import {Injectable} from '@angular/core';

@Injectable()
export class TraceService {
  trace(message: string) {
    console.log(message);
  }
}

@Injectable()
export class AdvancedTraceService {
  static count = 0;
  instance: number;

  constructor() {
    this.instance = ++AdvancedTraceService.count;
  }

  trace(message: string) {
    console.log(`Instance: ${this.instance} - ${message}`);
  }
}