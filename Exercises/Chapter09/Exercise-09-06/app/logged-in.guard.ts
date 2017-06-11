import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserAuthService} from './login/user-auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private authService: UserAuthService, 
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
      if (this.authService.loggedInUser) { 
        return true; 
      }
      this.authService.redirectUrl = routerState.url;
      this.router.navigate(['/login']);
      return false;
  }
}