import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {DiveSite} from './dive-site';
import {SiteManagementService} from './site-management.service';
import {UserAuthService} from '../login/user-auth.service';

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/sites/site-list.template.html',
  styleUrls: ['app/sites/site-list.styles.css']
})
export class SiteListComponent {
  sites: DiveSite[];

  constructor(
    public authService: UserAuthService,
    private siteService: SiteManagementService,
    private router: Router
  ) {
    this.sites = siteService.getAllSites();
  }
}