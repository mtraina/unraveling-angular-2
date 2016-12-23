import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DiveLogComponent} from './logs/dive-log.component';

import {LoggedInGuard} from './logged-in.guard';
import {UserAuthService} from './login/user-auth.service';
import {LoginComponent} from './login/login.component';
import {CanDeactivateGuard} from './deactivable.guard';

const routes: Routes = [
  { path: 'divelogs', component: DiveLogComponent, 
    canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'sites', 
    loadChildren: 'app/sites/sites.module#SitesModule' },
  { path: '', pathMatch: 'full', component: WelcomeComponent },
];

export const routingProviders = [
  LoggedInGuard,
  UserAuthService,
  CanDeactivateGuard
];
export const routingModule = RouterModule.forRoot(routes);