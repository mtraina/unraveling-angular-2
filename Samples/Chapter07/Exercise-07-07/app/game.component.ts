import {Component, Optional} from '@angular/core';
import {MessageBusService} from './message-bus.service';

@Component({
  selector: 'yw-game',
  templateUrl: 'app/game.template.html' 
})
export class GameComponent {
  private _tokens = 4;
  collected = 0;
  divers = ["Bob", "Cecile", "Jake"]

  get tokens() {
    return this._tokens;
  }

  set tokens(value: number) {
    this._tokens = value;
    if (this.messenger) {
      this.messenger.sendMessage(
        `Game ==> Token to collect: ${value}`);
    }
  }
  
  constructor(@Optional() private messenger: MessageBusService) {
  }

  tokenFound(newTokens: number) {
    this.collected += newTokens;
    if (this.messenger) {
      this.messenger.sendMessage(
        `Game ==> Tokens found: ${this.collected}`);
    }
  }
}