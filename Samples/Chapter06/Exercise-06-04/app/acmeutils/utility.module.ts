import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BorderDirective} from './border.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [BorderDirective],
  exports: [BorderDirective]
})
export class UtilityModule { }