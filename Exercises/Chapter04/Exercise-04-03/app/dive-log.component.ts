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
  errorMessage = null;

  constructor(private api: DiveLogApi) {
  }

  refreshDives() {
    this.loading = true;
    this.dives = [];
    
    this.api.getDives()
      .then(data => {
        this.dives = data;
        this.loading = false;
      }) 
      .catch(errMsg => {
      this.errorMessage = errMsg;
      this.loading = false;
    });
  }
}
