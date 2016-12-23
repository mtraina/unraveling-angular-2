import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NumberListComponent} from './number-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [NumberListComponent],
  bootstrap: [NumberListComponent]
})
export class AppModule { }