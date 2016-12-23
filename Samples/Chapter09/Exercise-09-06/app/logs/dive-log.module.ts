import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DiveLogComponent} from './dive-log.component';
import {ContentFilterPipe} from './content-filter.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveLogComponent,
    ContentFilterPipe
  ]
})
export class DiveLogModule { }