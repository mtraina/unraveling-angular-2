import {Component} from '@angular/core';
import {InventoryService, TracedInventoryService} from './inventory.service';
import {InventoryContract} from './inventory.service';

@Component({
  selector: 'diver',
  template: `
    <div class="col-sm-3">
      <h2>{{name}}</h2>
      <gear-item *ngFor="let item of items"
        [name]="item"
        [owner]="name">
      </gear-item>
      <pre>{{inventory.getItems() | json}}</pre>
    </div>
  `,
  inputs: ['name', 'items'],
  providers: [{
    provide: InventoryContract,
    useClass: TracedInventoryService
  }]
})
export class DiverComponent {
  name: string;
  items: string[];

  constructor(private inventory: InventoryContract) {
  }
}