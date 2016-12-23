import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {LocationsComponent} from './locations.component';
import {LocationsApiService} from './locations-api.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [LocationsComponent],
  providers: [LocationsApiService],
  bootstrap: [LocationsComponent]
})
export class AppModule { }