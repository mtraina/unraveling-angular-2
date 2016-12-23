import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {WelcomeModule} from './welcome/welcome.module';
import {DiveLogModule} from './logs/dive-log.module';
import {SitesModule} from './sites/sites.module';

import {routingModule} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    WelcomeModule,
    DiveLogModule,
    SitesModule,
    routingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }