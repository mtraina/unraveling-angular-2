import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {WelcomeModule} from './welcome/welcome.module';
import {DiveLogModule} from './logs/dive-log.module';
import {SitesModule} from './sites/sites.module';
import {LoginModule} from './login/login.module';

import {routingModule, routingProviders} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    WelcomeModule,
    DiveLogModule,
    SitesModule,
    LoginModule,
    routingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [routingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }