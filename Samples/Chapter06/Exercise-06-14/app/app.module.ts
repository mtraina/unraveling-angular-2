import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './item.component';
import {DiverComponent} from './diver.component';
import {TraceService, AdvancedTraceService} from './trace.service';

let tracer = new AdvancedTraceService();
tracer.info = "V0.12";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ItemComponent,
    DiverComponent
  ],
  providers: [
    {provide: AdvancedTraceService, useValue: tracer}, 
    {provide: TraceService, useExisting: AdvancedTraceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }