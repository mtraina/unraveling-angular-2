import {Component} from '@angular/core';
import {SiteListComponent} from './site-list.component';
import {SiteManagementService} from './site-management.service'

@Component({
  selector: 'yw-app',
  templateUrl: 'app/app.template.html',
  providers: [SiteManagementService]
})
export class AppComponent {
  siteId: number;
  currentView = 'list';

  navigateTo(view: string) {
    this.currentView = view;
  }
}