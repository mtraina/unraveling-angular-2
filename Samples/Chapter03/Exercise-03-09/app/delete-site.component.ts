import {Component, Input, Output, EventEmitter} from '@angular/core';
import {OnChanges} from '@angular/core';
import {SiteManagementService} from './site-management.service'

@Component({
  selector: 'delete-site-view',
  templateUrl: 'app/delete-site.template.html'
})
export class DeleteSiteComponent implements OnChanges{
  @Input() siteId: number;
  @Output() onClosed = new EventEmitter();
  siteName: string;

  constructor(private siteService: SiteManagementService) {
  }

  ngOnChanges() {
    this.siteName = this.siteService
      .getSiteById(this.siteId).name;
  }

  delete() {
    this.siteService.deleteSite(this.siteId);
    this.onClosed.emit(null);
  }

  cancel() {
    this.onClosed.emit(null);
  }
}