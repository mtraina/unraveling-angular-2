import {Component, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container">
      <div class="col-sm-12 mousepad"
        id="mousepad">
      </div>
      <log-board [messages]="messages"></log-board>
    </div>
  `,
  styles: [`
    .mousepad {
      margin: 24px 0;
      background-color: #e0e0f0;
      border: 1px dotted #808080;
      height: 300px;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  messages: any[] = [];

  log(message: any) {
    this.messages.push(message)
  }

  ngAfterViewInit() {
    let mousepad = document.getElementById('mousepad');
    let mouseMove$ = Observable
      .fromEvent(mousepad, 'mousemove')
      .do((m: MouseEvent) => { 
        this.log(`(${m.clientX}, ${m.clientY})`);
      });

    mouseMove$.subscribe();
  }
}