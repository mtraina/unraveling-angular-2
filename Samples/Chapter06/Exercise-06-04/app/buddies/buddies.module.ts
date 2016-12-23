import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BuddiesComponent} from './buddies.component';
import {UtilityModule} from '../acmeutils/utility.module';

@NgModule({
  imports: [
    BrowserModule,
    UtilityModule
  ],
  declarations: [BuddiesComponent],
  exports: [BuddiesComponent]
})
export class BuddiesModule { }