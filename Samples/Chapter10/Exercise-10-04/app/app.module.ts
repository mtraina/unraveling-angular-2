import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveLogComponent} from './dive-log.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [DiveLogComponent],
  bootstrap: [DiveLogComponent]
})
export class AppModule { }