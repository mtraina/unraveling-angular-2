import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GameComponent} from './game.component';
import {DiverComponent} from './diver.component';
import {BoardComponent} from './board.component';
import {MessageBusService} from './message-bus.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    GameComponent,
    DiverComponent,
    BoardComponent  
  ],
  providers: [MessageBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }