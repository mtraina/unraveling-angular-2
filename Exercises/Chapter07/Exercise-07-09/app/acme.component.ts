import {Component} from '@angular/core';

@Component({
  selector: 'acme',
  template: `
    <h1>My Acme Component</h1>
    <ng-content></ng-content>
  `
})
export class AcmeComponent {
}