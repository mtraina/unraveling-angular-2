import {Component} from '@angular/core';

@Component({
  selector: 'acme',
  template: `
    <h2>My Acme Component</h2>
    <ng-content></ng-content>
  `
})
export class AcmeComponent {
}