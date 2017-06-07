import {Component} from '@angular/core';

@Component({
  selector: 'yw-messages',
  template: `
    <div>
      <ng-content select="header"></ng-content>
      <ul>
        <li *ngFor="let message of messages">
          {{message}}
        </li>
      </ul>
      <ng-content select="footer"></ng-content>
    </div>
  `,
  inputs: ['messages']
})
export class MessageBoardComponent {
  messages: string[] = [];
}