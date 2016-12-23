import {Injectable, Inject} from '@angular/core';
import {VERSION} from './version-token';

@Injectable()
export class TraceService {
  trace(message: string) {
    console.log(message);
  }
}

@Injectable()
export class AdvancedTraceService {
  info: string;

  constructor(@Inject(VERSION) private version: string) {}

  trace(message: string) {
    console.log(`Info: ${this.version} - ${message}`);
  }
}