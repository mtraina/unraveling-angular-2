import {Component} from '@angular/core';
import {InventoryService} from './inventory.service';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h1>Diving Gear Checklist</h1>
      <div class="row">
        <div class="col-sm-3">
          <gear-item *ngFor="let item of items"
            [name]="item"
            [owner]="'Joe'">
          </gear-item>
          <pre>{{inventory.getItems() | json}}</pre>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  items = ['Mask', 'Fins', 'Regulator']

  constructor(private inventory: InventoryService) {
  }
}