import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './item.component';
import {DiverComponent} from './diver.component';
import {TraceService, AdvancedTraceService} from './trace.service';
import {VERSION} from './version-token';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ItemComponent,
    DiverComponent
  ],
  providers: [
    AdvancedTraceService,
    {provide: VERSION, useValue: 'v0.23'},
    {provide: TraceService, useExisting: AdvancedTraceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
