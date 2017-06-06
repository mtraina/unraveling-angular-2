import {Component} from '@angular/core';

@Component({
  selector: 'yw-list',
  template: `
    <div class="container-fluid">
      <h3>ListComponent</h3>
      <div class="col-sm-4"
        *ngFor="let item of items">
        <yw-item [name]="item"></yw-item>
      </div>
    </div>
  `,
  styles: [`
    div {
      background-color: #c0c080;
      padding: 8px;
    }
  `]
})
export class ListComponent {
  items = ['#1', '#2', '#3']
}