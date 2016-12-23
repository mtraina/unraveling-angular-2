import {Component} from '@angular/core';
import {UserAuthService} from './login/user-auth.service';

@Component({
  selector: 'yw-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  constructor(public authService: UserAuthService) {
  }
}
