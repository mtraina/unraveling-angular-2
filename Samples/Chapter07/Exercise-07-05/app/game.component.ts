import {Component, Optional} from '@angular/core';
import {MessageBusService} from './message-bus.service';

@Component({
  selector: 'yw-game',
  templateUrl: 'app/game.template.html' 
})
export class GameComponent {
  tokens = 4;
  collected = 0;
  divers = ["Bob", "Cecile", "Jake"]

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