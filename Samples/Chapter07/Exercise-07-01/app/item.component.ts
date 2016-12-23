import {Component} from '@angular/core';

@Component({
  selector: 'yw-item',
  template: `
    <div class="container-fluid">
      <h4>Item {{name}}</h4>
    </div>
  `,
  styles: [`
    div {
      background-color: #ffff40;
      padding: 8px;
    }
  `],
  inputs: ['name']
})
export class ItemComponent {
  name: string;
}