import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DiveLogComponent} from './logs/dive-log.component';
import {SiteListComponent} from './sites/site-list.component';

import {sitesRoutes} from './sites/sites.routes';

const routes: Routes = [
  { path: 'divelogs', component: DiveLogComponent },
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  ...sitesRoutes
];

export const routingModule = RouterModule.forRoot(routes);