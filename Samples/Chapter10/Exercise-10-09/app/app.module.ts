import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveInfoComponent} from './dive-info.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [DiveInfoComponent],
  bootstrap: [DiveInfoComponent]
})
export class AppModule { }