import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveInfoComponent} from './dive-info.component';
import {DiveDataPipe} from './dive-data.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveInfoComponent,
    DiveDataPipe
  ],
  bootstrap: [DiveInfoComponent]
})
export class AppModule { }