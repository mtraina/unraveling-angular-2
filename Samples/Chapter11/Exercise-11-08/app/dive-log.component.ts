import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';
import {DiveLogApi} from './dive-log-api.service'

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  loading = false;
  dives: DiveLogEntry[];
  errorMessage: string = null;

  constructor(private api: DiveLogApi) {
  }

  refreshDives() {
    this.loading = true;
    this.dives = [];
    this.errorMessage = null;
 
    this.api.getDives()
      .forEach(
        (dives: DiveLogEntry[]) => {
          this.dives = dives
      })
      .catch(err => this.errorMessage = err)
      .then(() => this.loading = false);
  }
}
