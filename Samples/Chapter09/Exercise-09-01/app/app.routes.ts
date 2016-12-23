import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DiveLogComponent} from './logs/dive-log.component';
import {SiteListComponent} from './sites/site-list.component';

const routes: Routes = [
  { path: 'divelogs', component: DiveLogComponent },
  { path: 'sites', component: SiteListComponent },
  { path: '', pathMatch: 'full', component: WelcomeComponent }
];

export const routingModule = RouterModule.forRoot(routes);