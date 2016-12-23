import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MyComponent} from './my-comp.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [MyComponent],
  bootstrap: [MyComponent]
})
export class AppModule { }