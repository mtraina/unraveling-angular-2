import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TaglineComponent} from './tagline.component';
import {SearchComponent} from './search.component';
import {ListComponent} from './list.component';
import {ItemComponent} from './item.component';
import {FooterComponent} from './footer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TaglineComponent,
    SearchComponent,
    ListComponent,
    ItemComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }