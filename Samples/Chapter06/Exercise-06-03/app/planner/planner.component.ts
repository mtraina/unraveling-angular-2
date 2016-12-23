import {Component} from '@angular/core';

@Component({
  selector: 'yw-planner',
  template: `
    <div class="row">
      <div class="col-sm-12">
        <h2>Planner Component</h2>
        <yw-tour-planner></yw-tour-planner>
        <yw-dive-planner></yw-dive-planner>
      </div>
    </div>
  `,
  styles: [
    `
      .row {
        background-color: #e0e0e0;
      }
    `]
})
export class PlannerComponent {
}