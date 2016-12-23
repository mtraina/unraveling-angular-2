import {Component} from '@angular/core';

@Component({
  selector: 'yw-buddies',
  template: `
    <div class="row">
      <div class="col-sm-12">
        <h2>Dive Buddies Component</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .row {
        background-color: #f0f0f0;
      }
    `]
})
export class BuddiesComponent {
}