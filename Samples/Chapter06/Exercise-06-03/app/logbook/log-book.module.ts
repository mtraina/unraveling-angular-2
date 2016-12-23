import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {LogBookComponent} from './log-book.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [LogBookComponent],
  exports: [LogBookComponent]
})
export class LogBookModule { }