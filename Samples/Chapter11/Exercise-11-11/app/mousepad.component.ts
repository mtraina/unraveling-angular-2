import {Component, Input} from '@angular/core';
import {Subject} from 'rxjs/subject';
import 'rxjs/add/operator/map';

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
  counter = 0;
  private eventSource = new Subject<MouseEvent>();
  mouseEvents$ = this.eventSource.asObservable();

  onMouseMove(e: MouseEvent) {
    this.counter++;
    if (this.counter % 10 == 0) {
      this.eventSource.next(e);
    }
  }
}