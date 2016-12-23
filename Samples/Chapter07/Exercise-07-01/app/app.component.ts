import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h2>AppComponent</h2>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <yw-tagline></yw-tagline>
          </div>
          <div class="col-sm-4">
            <yw-search></yw-search>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <yw-list></yw-list>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <yw-footer></yw-footer>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    div {
      background-color: #e0e0e0;
      padding: 8px;
    }
  `]
})
export class AppComponent {}