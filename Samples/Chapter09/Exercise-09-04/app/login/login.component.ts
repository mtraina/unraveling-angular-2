import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserAuthService} from './user-auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.template.html'
})
export class LoginComponent {
  inProgress = false;
  constructor(public authService: UserAuthService,
    public router: Router) {
  }

  login(userName: string) {
    this.inProgress = true;
    this.authService.login(userName).then(() => {
      let redirectUrl = this.authService.redirectUrl 
        ? this.authService.redirectUrl 
        : '/';
      this.router.navigate([redirectUrl]);
      this.inProgress = false;
    }) 
  }

  logout() {
    this.inProgress = true;
    this.authService.logout().then(() => {
      this.inProgress = false;
    }) 
  }
}
