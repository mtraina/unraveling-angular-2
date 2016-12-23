import {NgModule, ModuleWithProviders} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login.component';
import {UserAuthService} from './user-auth.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [LoginComponent],
  providers: [UserAuthService]
})
export class LoginModule {
}