import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {DiveSite} from './dive-site';
import {SiteManagementService} from './site-management.service';

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html',
  styles: [`
    .evenRow {
      background-color: #dddddd;
    }

    .topRow {
      border-top: 2px solid #808080;
    }

    .bottomRow {
      border-bottom: 2px solid #808080;
    }`]
})
export class SiteListComponent {
  sites: DiveSite[];

  constructor(private siteService: SiteManagementService, private router: Router){
    this.sites = siteService.getAllSites();
  }

  edit(siteId: number){
    this.router.navigate(['/edit', siteId]);
  }
}