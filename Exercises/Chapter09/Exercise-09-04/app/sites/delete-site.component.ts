import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SiteManagementService} from './site-management.service'

@Component({
  selector: 'delete-site-view',
  templateUrl: 'app/sites/delete-site.template.html'
})
export class DeleteSiteComponent {
  siteId: number;
  siteName: string;
  private parSub: any;

  constructor(
    private siteService: SiteManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) {
        this.siteId = this.route.snapshot.params['id'];
        this.siteName = this.siteService
          .getSiteById(this.siteId).name;
  }

  delete() {
    this.siteService.deleteSite(this.siteId);
    this.router.navigate(['/list']);
  }
}