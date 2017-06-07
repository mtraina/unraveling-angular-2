import {Component, Optional} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {GameComponent} from './game.component';
import {MessageBusService} from './message-bus.service';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html'
})
export class DiverComponent {
  @Input() name: string;
  tokensFound = 0;

  constructor(
    private parent: GameComponent,
    @Optional() private messenger: MessageBusService){}

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