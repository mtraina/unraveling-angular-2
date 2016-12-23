import {Component, Optional} from '@angular/core';
import {Input} from '@angular/core';
import {GameComponent} from './game.component';
import {MessageBusService} from './message-bus.service';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html' 
})
export class DiverComponent {
  private _name: string;

  @Input() get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
    if (this.messenger) {
      this.messenger.sendMessage(
        `Diver name set ==> ${value}`);
    }
  }

  constructor(
    private parent: GameComponent,
    @Optional() private messenger: MessageBusService) {}
  
  tokensFound = 0;

  found() {
    this.updateTokens(1);
  }

  lost() {
    this.updateTokens(-1);
  }

  updateTokens(count: number) {
    this.tokensFound += count;
    if (this.messenger) {
      this.messenger.sendMessage(
        `${this.name} ==> ${count}`);
    }
    this.parent.tokenFound(count);
  }
}