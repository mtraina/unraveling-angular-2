import {Component} from '@angular/core';

@Component({
  selector: 'yw-dive-planner',
  template: `
    <div class="col-sm-6"
      gc-highlight="red">
      <h3>Dive Planner Component</h3>
    </div>
  `,
  styles: [
    `
      .col-sm-6 {
        background-color: #ffe000;
      }
    `]
})
export class DivePlannerComponent {
}