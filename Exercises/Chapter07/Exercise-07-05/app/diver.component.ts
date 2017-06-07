import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {GameComponent} from './game.component';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html'
})
export class DiverComponent {
  @Input() name: string;
  tokensFound = 0;

  constructor(private parent: GameComponent){}

  found() {
    this.tokensFound++;
    this.parent.tokenFound(1);
  }

  lost() {
    this.tokensFound--;
    this.parent.tokenFound(-1);
  }
}