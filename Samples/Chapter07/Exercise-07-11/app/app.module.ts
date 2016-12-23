import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TocComponent} from './toc.component';
import {HeaderDirective} from './header.directive';
import {HnDirective} from './hn.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TocComponent,
    HnDirective,
    HeaderDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }