import {Component} from '@angular/core';
import {MessageBusService} from './message-bus.service';

@Component({
  selector: 'yw-board',
  templateUrl: 'app/board.template.html' 
})
export class BoardComponent {
  messages: string[] = [];

  constructor(private messenger: MessageBusService) {
    messenger.messageStream.subscribe(
      message => { this.messages.push(message); }
    );
  }
}