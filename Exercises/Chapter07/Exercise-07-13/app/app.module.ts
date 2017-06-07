import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu.component';
import {MenuSectionComponent} from './menu-section.component';
import {MenuItemComponent} from './menu-item.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSectionComponent,
    MenuItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }