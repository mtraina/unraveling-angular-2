import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
//import {GameComponent} from './game.component';
//import {DiverComponent} from './diver.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    //GameComponent,
    //DiverComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }