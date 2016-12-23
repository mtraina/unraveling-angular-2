import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './item.component';
import {InventoryService} from './inventory.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ItemComponent
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }