import {Routes, RouterModule} from '@angular/router';
import {SitesComponent} from './sites.component';
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';
import {CanDeactivateGuard} from '../deactivable.guard';

export const sitesRoutes: Routes = [
  {
    path: 'sites',
    component: SitesComponent,
    children: [
      { path: '', component: SiteListComponent },
      { path: 'add', component: AddSiteComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id', component: EditSiteComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'delete/:id', component: DeleteSiteComponent }
    ]
  }
];

export const sitesRoutingModule = RouterModule.forChild(sitesRoutes);