import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {LongStringComponent} from './long-string.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [LongStringComponent],
  bootstrap: [LongStringComponent]
})
export class AppModule { }