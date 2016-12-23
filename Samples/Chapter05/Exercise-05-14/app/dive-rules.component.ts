import {Component} from '@angular/core';

@Component({
  selector: 'yw-instructions',
  templateUrl: 'app/dive-rules.template.html'
})
export class DiveRulesComponent {
  diveType = 'day';

  toggleDiveType() {
    if (this.diveType == 'day') {
      this.diveType = 'night';
    } else {
      this.diveType = 'day';
    }
  }
}
