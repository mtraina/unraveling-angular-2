import {Component} from '@angular/core';
import {OnInit, AfterContentInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <yw-messages [messages]="logMessages">
        <header>
          <h2>Messages Logged</h2>
        </header>
        <footer>
         <p>--- End of messages</p>
        </footer>
      </yw-messages>
    </div>
  `
})
export class AppComponent implements OnInit, 
  AfterContentInit, AfterViewInit {

    logMessages: string[] = [];
    count = 0;

    ngOnInit() {
      this.log('ngOnInit');
    }

    ngAfterContentInit() {
      this.log('ngAfterContentInit');
    }

    ngAfterViewInit() {
      this.log('ngAfterViewInit');
    }

    log(message: string) {
      this.logMessages.push(`${++this.count}: ${message}`);
    }
}