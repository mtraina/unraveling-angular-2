import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SiteManagementService} from './site-management.service'

@Component({
  selector: 'edit-site-view',
  templateUrl: 'app/edit-site.template.html'
})
export class EditSiteComponent {
  @Input() siteId: number;
  siteName: string;

  @Output() onClosed = new EventEmitter();

  constructor(private siteService: SiteManagementService) {
    this.siteName = this.siteService
      .getSiteById(this.siteId).name;
  }

  save() {
    this.siteService.saveSite({id: this.siteId, name:this.siteName});
    this.onClosed.emit(null);
  }

  cancel() {
    this.onClosed.emit(null);
  }
}