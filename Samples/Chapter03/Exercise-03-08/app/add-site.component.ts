import {Component, Output, EventEmitter} from '@angular/core';
import {SiteManagementService} from './site-management.service'

@Component({
  selector: 'add-site-view',
  templateUrl: 'app/add-site.template.html'
})
export class AddSiteComponent {
  @Output() onClosed = new EventEmitter();
  siteName: string;

  constructor(private siteService: SiteManagementService) {
  }

  add() {
    this.siteService.addSite({id: 0, name:this.siteName});
    this.onClosed.emit(null);
  }

  cancel() {
    this.onClosed.emit(null);
  }
}