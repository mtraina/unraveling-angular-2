import {Component} from '@angular/core';

@Component({
  selector: 'superb',
  template: `
    <h1>My SuperbComponent</h1>
    <acme>
      <h3>I am a content child of acme</h3>
      <p>I am, too</p>
    </acme>
  `
})
export class SuperbComponent {
}