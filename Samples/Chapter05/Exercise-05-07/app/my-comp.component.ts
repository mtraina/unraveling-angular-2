import {Component} from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <h2 [class]="color">This is RED</h2>
    <h2 class="color">This is GREEN</h2>
  `,
  styles: [`
    .red { 
      color: red;
    }

    .color { 
      color: green;
    }
  `]
})
export class MyComponent {
  color = "red";
}
