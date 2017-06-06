import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html'
})
export class DiverComponent {
  @Input() name: string;
  @Output() onTokenFound = new EventEmitter<number>();
  tokensFound = 0;

  found() {
    this.tokensFound++;
    this.onTokenFound.emit(1);
  }

  lost() {
    this.tokensFound--;
    this.onTokenFound.emit(-1);
  }
}