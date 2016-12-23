import {Component, AfterViewInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MousepadComponent} from './mousepad.component';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container">
      <mousepad></mousepad>
      <span class="message">
        ({{ (mousepad.mouseEvents$ | async)?.clientX }},
         {{ (mousepad.mouseEvents$ | async)?.clientY }})
      </span>
    </div>
  `,
  styles: [`
    .message {
      display: inline-block;
      background-color: #e0e0e0;
      border: 1px solid #808080;
      padding: 2px 4px;
      margin: 4px 4px 0 0;
      border-radius: 2px;
    }
  `]
})
export class AppComponent {
  @ViewChild(MousepadComponent) mousepad: MousepadComponent;
}