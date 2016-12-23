import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './item.component';
import {DiverComponent} from './diver.component';
import {TraceService} from './trace.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ItemComponent,
    DiverComponent
  ],
  providers: [TraceService],
  bootstrap: [AppComponent]
})
export class AppModule { }