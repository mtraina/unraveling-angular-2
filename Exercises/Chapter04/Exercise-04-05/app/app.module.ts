import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {DiveLogComponent} from './dive-log.component';
import {ContentFilterPipe} from './content-filter.pipe';
import {DiveLogApi} from './dive-log-api.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    DiveLogComponent,
    ContentFilterPipe
  ],
  providers: [DiveLogApi],
  bootstrap: [DiveLogComponent]
})
export class AppModule { }