import {Component} from '@angular/core';

@Component({
  selector: 'yw-game',
  templateUrl: 'app/game.template.html' 
})
export class GameComponent {
  tokens = 4;
  collected = 0;
  divers = ["Bob", "Cecile", "Jake"]

  getMe() {
    return this;
  }
  
  tokenFound(newTokens: number) {
    this.collected += newTokens;
  }
}