import {Component} from '@angular/core';
import {ContentFilterPipe} from './content-filter.pipe'
import {DiveLogEntry} from './dive-log-entry';
import {DiveLogApi} from './dive-log-api.service'

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  loading = false;
  dives: DiveLogEntry[];

  constructor(private api: DiveLogApi) {
  }

  refreshDives() {
    this.loading = true;
    this.dives = [];
    setTimeout(() => {
      this.dives = this.api.getDives();
      this.loading = false;
    }, 1000);
  }
}
