import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AcmeComponent} from './acme.component';
import {SuperbComponent} from './superb.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AcmeComponent,
    SuperbComponent
  ],
  bootstrap: [AcmeComponent]
})
export class AppModule { }