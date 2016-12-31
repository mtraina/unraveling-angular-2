import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h1>Dive Site Maintenance</h1>
      <site-list-view></site-list-view>
    </div>
  `
})
export class AppComponent {
}