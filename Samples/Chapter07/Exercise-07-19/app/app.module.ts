import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu.component';
import {MenuSectionDirective} from './menu-section.directive';
import {MenuItemDirective} from './menu-item.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSectionDirective,
    MenuItemDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }