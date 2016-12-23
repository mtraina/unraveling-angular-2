import {Component} from '@angular/core';

@Component({
  selector: 'yw-log-book',
  template: `
    <div class="row">
      <div class="col-sm-12">
        <h2>Log Book Component</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .row {
        background-color: #d0d0d0;
      }
    `]
})
export class LogBookComponent {
}