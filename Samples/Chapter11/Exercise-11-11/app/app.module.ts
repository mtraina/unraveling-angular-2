import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MousepadComponent} from './mousepad.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MousepadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }