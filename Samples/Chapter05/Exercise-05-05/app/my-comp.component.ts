import {Component} from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <h2>Dive count: {{diveCount}}</h2>
    <h2>Average dive time #1: {{avgTime(diveCount)}}</h2>
    <h2>Average dive time #2: {{avgTime(diveCount)}}</h2>
  `
})
export class MyComponent {
  diveCount = 3;
  totalTime = 12;

  avgTime(count: number) {
    this.diveCount++;
    return this.totalTime/count;
  }
}
