import {Component} from '@angular/core';

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
}