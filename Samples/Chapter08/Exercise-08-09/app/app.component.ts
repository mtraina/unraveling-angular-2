import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container">
      <h1>Enter a new Dive Log Record</h1>
      <dive-log-form></dive-log-form>
    </div>
  `
})
export class AppComponent {
}