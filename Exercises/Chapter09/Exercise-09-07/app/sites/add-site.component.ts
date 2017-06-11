import {Component, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {SiteManagementService} from './site-management.service'
import {DeactivableComponent} from '../deactivable.guard';

@Component({
  selector: 'add-site-view',
  templateUrl: 'app/sites/add-site.template.html'
})
export class AddSiteComponent implements DeactivableComponent {
  siteName: string;
  origSiteName = '';

  constructor(
    private siteService: SiteManagementService,
    private router: Router) { }

  add() {
    this.siteService.addSite({id: 0, name:this.siteName});
    this.origSiteName = this.siteName;
    this.router.navigate(['/list']);
  }

  allowLeave = () => this.siteName == this.origSiteName;
  confirmText = () => "Do you want to discard the modifications?";
}