import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BuddiesComponent} from './buddies.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [BuddiesComponent],
  exports: [BuddiesComponent]
})
export class BuddiesModule { }