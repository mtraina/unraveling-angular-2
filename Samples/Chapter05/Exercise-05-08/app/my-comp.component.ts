import {Component} from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <div class="container-fluid" style="margin-top:24px;">
      <button (click)="show($event)">Button #1</button>
      <button (click)="show($event)">Button #2</button>
      <button (click)="show($event)">Button #3</button>
      <h3>Clicked: {{clicked}}</h3>
    </div>
  `
})
export class MyComponent {
  clicked = "<none>";

  show(e) {
    this.clicked = e.target.textContent;
  }
}
