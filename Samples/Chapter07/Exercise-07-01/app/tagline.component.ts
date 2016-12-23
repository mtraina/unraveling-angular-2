import {Component} from '@angular/core';

@Component({
  selector: 'yw-tagline',
  template: `
    <div class="container-fluid">
      <h3>TaglineComponent</h3>
    </div>
  `,
  styles: [`
    div {
      background-color: #8080ff;
      padding: 8px;
    }
  `]
})
export class TaglineComponent {}