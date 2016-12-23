import {Component, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SiteManagementService} from './site-management.service'
import {DeactivableComponent} from '../deactivable.guard';

@Component({
  selector: 'add-site-view',
  templateUrl: 'app/sites/add-site.template.html'
})
export class AddSiteComponent implements DeactivableComponent {
  siteName = '';
  origSiteName = '';

  constructor(
    private siteService: SiteManagementService,
    private route: ActivatedRoute,
    private router: Router) { }

  cancel() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  add() {
    this.siteService.addSite({id: 0, name:this.siteName});
    this.origSiteName = this.siteName;
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  allowLeave = () =>this.siteName == this.origSiteName;
  confirmText = () => null;  
}