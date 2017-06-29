import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container">
      <div class="col-sm-12 mousepad"
        id="mousepad"
        [class.subscribed]="subscription"
        (click)="toggleSubscribe()">
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
   .subscribed {
      background-color: #b0b0f0;
   }
  `]
})
export class AppComponent implements OnInit {
  messages: any[] = [];
  subscription: any = null;
  mouseMove$: Observable<any>;

  log(message: any) {
    this.messages.push(message)
  }

  ngOnInit() {
    let mousepad = document.getElementById('mousepad');
    this.mouseMove$ = Observable
      .fromEvent(mousepad, 'mousemove');

    this.toggleSubscribe();
  }

  toggleSubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.log('Cancelled');
    } else {
      this.subscription = this.mouseMove$.subscribe(
        (m: MouseEvent) => { 
          this.log(`(${m.clientX}, ${m.clientY})`);
        });
    }
  }
}