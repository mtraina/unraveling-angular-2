import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  siteId: number;
  currentView = 'list';

  navigateTo(view: string) {
    this.currentView = view;
  }
}