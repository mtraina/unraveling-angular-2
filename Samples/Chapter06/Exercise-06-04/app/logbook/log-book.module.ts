import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {LogBookComponent} from './log-book.component';
import {UtilityModule} from '../sharedutil/utility.module';
import {UtilityModule as AcmeUtils} from '../acmeutils/utility.module';


@NgModule({
  imports: [
    BrowserModule,
    UtilityModule,
    AcmeUtils
  ],
  declarations: [LogBookComponent],
  exports: [LogBookComponent]
})
export class LogBookModule { }