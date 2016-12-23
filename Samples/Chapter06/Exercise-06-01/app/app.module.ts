import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PlannerModule} from './planner/planner.module';

@NgModule({
  imports: [
    BrowserModule,
    PlannerModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }