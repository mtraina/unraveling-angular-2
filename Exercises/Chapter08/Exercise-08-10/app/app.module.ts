import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DiveLogFormComponent} from './dive-log-form.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DiveLogFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }