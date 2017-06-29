import {Component, AfterViewInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MousepadComponent} from './mousepad.component';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container">
      <mousepad></mousepad>
      <log-board [messages]="messages"></log-board>
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MousepadComponent) mousepad: MousepadComponent;
  messages: any[] = [];
  counter = 0;

  ngAfterViewInit() {
    this.mousepad.mouseEvents$.subscribe(
      (m: MouseEvent) => { 
        this.log(`(${m.clientX}, ${m.clientY})`);
      },
      () => { this.log("Error!"); },
      () => { this.log("Completed."); }
    )
  }

  log(message: any) {
    this.messages.push(message)
  }
}