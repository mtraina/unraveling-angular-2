import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {GameComponent} from './game.component';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html' 
})
export class DiverComponent {
  @Input() name: string;

  constructor(private parent: GameComponent) {}
  
  tokensFound = 0;

  found() {
    this.tokensFound++;
    this.parent.tokenFound(1);
  }

  lost() {
    this.tokensFound--;
    this.parent.tokenFound(-1);
  }
}