import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PlannerModule} from './planner/planner.module';
import {LogBookModule} from './logbook/log-book.module';
import {BuddiesModule} from './buddies/buddies.module';

@NgModule({
  imports: [
    BrowserModule,
    PlannerModule,
    LogBookModule,
    BuddiesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }