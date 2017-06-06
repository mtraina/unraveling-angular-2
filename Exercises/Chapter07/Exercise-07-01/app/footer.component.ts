import {Component} from '@angular/core';

@Component({
  selector: 'yw-footer',
  template: `
    <div class="container-fluid">
      <h3>FooterComponent</h3>
    </div>
  `,
  styles: [`
    div {
      background-color: #c0c0c0;
      padding: 8px;
    }
  `]
})
export class FooterComponent {}