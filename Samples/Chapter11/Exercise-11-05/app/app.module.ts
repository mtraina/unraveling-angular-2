import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MousepadComponent} from './mousepad.component';
import {LogBoardComponent} from './log-board.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MousepadComponent,
    LogBoardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }