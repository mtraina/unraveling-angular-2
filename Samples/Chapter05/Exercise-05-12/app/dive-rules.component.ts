import {Component} from '@angular/core';
import {DayDirective} from './yw-day.directive';
import {NightDirective} from './yw-night.directive';

@Component({
  selector: 'yw-instructions',
  templateUrl: 'app/dive-rules.template.html',
  directives: [ DayDirective, NightDirective ]
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
