import {Component, Input} from '@angular/core';

@Component({
  selector: 'log-board',
  template: `
    <div>
      <span *ngFor="let message of messages"
        class="message">
        {{message}}
      </span>
    </div>
  `,
  styles: [`
    .message {
      display: inline-block;
      background-color: #e0e0e0;
      border: 1px solid #808080;
      padding: 2px 4px;
      margin: 4px 4px 0 0;
      border-radius: 2px;
    }
  `]
})
export class LogBoardComponent {
  @Input() messages: any[];
}