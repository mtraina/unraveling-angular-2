import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';
import {SiteManagementService} from './site-management.service'
import {ActionableDirective} from './actionable.directive'

import {routingModule} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    routingModule
  ],
  declarations: [
    AppComponent,
    SiteListComponent,
    AddSiteComponent,
    EditSiteComponent,
    DeleteSiteComponent,
    ActionableDirective
  ],
  providers: [SiteManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }