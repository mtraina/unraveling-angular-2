import {Component} from '@angular/core';

@Component({
  selector: 'yw-tour-planner',
  template: `
    <div class="col-sm-6"
      gc-highlight="red">
      <h3>Tour Planner Component</h3>
    </div>
  `,
  styles: [
    `
      .col-sm-6 {
        background-color: #00e0ff;
      }
    `]
})
export class TourPlannerComponent {
}