import {Component, Input} from '@angular/core';
import {Subject} from 'rxjs/subject';

@Component({
  selector: 'mousepad',
  template: `
    <div class="col-sm-12"
      (mousemove)="onMouseMove($event)"
      (click)="onClick()">
    </div>
  `,
  styles: [`
    div {
      margin: 24px 0;
      background-color: #e0e0f0;
      border: 1px dotted #808080;
      height: 300px;
    }
  `]
})
export class MousepadComponent {
  counter: number;
  private eventSource: Subject<MouseEvent>;
  mouseEvents$;

  constructor() {
    this.createStream();
  }

  onMouseMove(e: MouseEvent) {
    this.counter++;
    if (this.counter % 10 == 0) {
      this.eventSource.next(e);
    }
    if (this.counter % 200 == 0) {
      this.eventSource.error("error");
    }
  }

  isStopped() {
    return this.eventSource.isStopped;
  }

  onClick() {
    this.eventSource.complete();
  }

  createStream() {
    this.counter = 0;
    this.eventSource = new Subject<MouseEvent>();
    this.mouseEvents$ = this.eventSource.asObservable();
  }
}