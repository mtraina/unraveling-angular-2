import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SiteManagementService} from './site-management.service'

@Component({
  selector: 'edit-site-view',
  templateUrl: 'app/edit-site.template.html'
})
export class EditSiteComponent {
  private _siteId: number;
  siteName: string;

  @Input() set siteId(id: number) {
    this._siteId = id;
    this.siteName = this.siteService.getSiteById(id).name;
  }

  @Output() onClosed = new EventEmitter();

  constructor(private siteService: SiteManagementService) {
  }

  save() {
    this.siteService.saveSite({id: this._siteId, name:this.siteName});
    this.onClosed.emit(null);
  }

  cancel() {
    this.onClosed.emit(null);
  }
}