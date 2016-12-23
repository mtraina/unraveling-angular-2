import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DiveLogComponent} from './dive-log.component';
import {SearchBoxComponent} from './search-box.component';
import {ContentFilterPipe} from './content-filter.pipe'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    DiveLogComponent,
    ContentFilterPipe,
    SearchBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }