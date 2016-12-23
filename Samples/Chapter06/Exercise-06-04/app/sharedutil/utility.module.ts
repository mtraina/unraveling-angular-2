import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HighlighterDirective} from './highlighter.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [HighlighterDirective],
  exports: [HighlighterDirective]
})
export class UtilityModule { }