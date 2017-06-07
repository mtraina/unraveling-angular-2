import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MessageBoardComponent} from './message-board.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MessageBoardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }