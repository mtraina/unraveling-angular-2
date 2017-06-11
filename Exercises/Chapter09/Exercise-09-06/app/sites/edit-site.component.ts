import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SiteManagementService} from './site-management.service'
import {DeactivableComponent} from '../deactivable.guard';

@Component({
  selector: 'edit-site-view',
  templateUrl: 'app/sites/edit-site.template.html'
})
export class EditSiteComponent implements DeactivableComponent {
  siteId: number;
  siteName: string;
  private parSub: any;
  private origSiteName: string;

  constructor(
    private siteService: SiteManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.siteId = this.route.snapshot.params['id'];
    this.siteName = this.siteService
      .getSiteById(this.siteId).name;
    this.origSiteName = this.siteName;
  }

  save() {
    this.siteService.saveSite({id: this.siteId, name:this.siteName});
    this.origSiteName = this.siteName;
    this.router.navigate(['../..'], {relativeTo: this.route});
  }

  allowLeave = () =>this.siteName == this.origSiteName;
  confirmText = () => "Do you want to discard the modifications?";  
}