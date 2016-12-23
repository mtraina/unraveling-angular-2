import {Component} from '@angular/core';
import {InventoryService} from './inventory.service';
import {TraceService, AdvancedTraceService} from './trace.service';

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
    provide: InventoryService, 
    useFactory: invFactory(['torch', 'BCD'], 'Dave'),
    deps: [AdvancedTraceService]
  }]
})
export class DiverComponent {
  name: string;
  items: string[];

  constructor(private inventory: InventoryService) {
  }
}

function invFactory(init: string[], owner: string) {
  return (tracer: AdvancedTraceService) => {
    var invSrv = new InventoryService(tracer);
    for (let i = 0; i < init.length; i++) {
      invSrv.toggle(init[i], owner);
    }
    return invSrv;
  }
}