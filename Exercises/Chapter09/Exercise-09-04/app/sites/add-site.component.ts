import {Component, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {SiteManagementService} from './site-management.service'

@Component({
  selector: 'add-site-view',
  templateUrl: 'app/sites/add-site.template.html'
})
export class AddSiteComponent {
  siteName: string;

  constructor(
    private siteService: SiteManagementService,
    private router: Router) { }

  add() {
    this.siteService.addSite({id: 0, name:this.siteName});
    this.router.navigate(['/list']);
  }
}