import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {SitesComponent} from './sites.component';
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';
import {SiteManagementService} from './site-management.service';

import {sitesRoutingModule} from './sites.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    sitesRoutingModule
  ],
  declarations: [
    SitesComponent,
    SiteListComponent,
    AddSiteComponent,
    EditSiteComponent,
    DeleteSiteComponent
  ],
  providers: [SiteManagementService]
})
export class SitesModule { }