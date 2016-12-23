import {Routes, RouterModule} from '@angular/router';
import {SitesComponent} from './sites.component';
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';

export const sitesRoutes: Routes = [
  {
    path: 'sites',
    component: SitesComponent,
    children: [
      { path: '', component: SiteListComponent },
      { path: 'add', component: AddSiteComponent },
      { path: 'edit/:id', component: EditSiteComponent },
      { path: 'delete/:id', component: DeleteSiteComponent }
    ]
  }
];

export const sitesRoutingModule = RouterModule.forChild(sitesRoutes);