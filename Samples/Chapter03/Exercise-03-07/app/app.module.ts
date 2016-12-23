import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';
import {SiteManagementService} from './site-management.service'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    SiteListComponent,
    AddSiteComponent,
    EditSiteComponent,
    DeleteSiteComponent
  ],
  providers: [SiteManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }