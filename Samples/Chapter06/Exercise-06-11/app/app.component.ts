import {Component, Optional} from '@angular/core';
import {TraceService} from './trace.service';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h1>Diving Gear Checklist</h1>
      <div class="row">
        <diver *ngFor="let diver of divers"
          [name]="diver"
          [items]="items">
        </diver>
      </div>
    </div>
  `
})
export class AppComponent {
  divers = ['Joe', 'Cecile', 'Martha', 'Steve']
  items = ['Mask', 'Fins', 'Regulator']

  constructor(@Optional() tracer: TraceService) {
    if (tracer) {
      tracer.trace("Youderwater app launched.")
    }
  }
}