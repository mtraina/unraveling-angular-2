import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DiveLogComponent} from './logs/dive-log.component';
import {SiteListComponent} from './sites/site-list.component';

import {sitesRoutes} from './sites/sites.routing';
import {LoggedInGuard} from './logged-in.guard';
import {UserAuthService} from './login/user-auth.service';
import {LoginComponent} from './login/login.component';
import {CanDeactivateGuard} from './deactivable.guard';

const routes: Routes = [
  { path: 'divelogs', component: DiveLogComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  ...sitesRoutes
];

export const routingProviders = [
  LoggedInGuard,
  UserAuthService,
  CanDeactivateGuard
];
export const routingModule = RouterModule.forRoot(routes);