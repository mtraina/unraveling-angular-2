import {Component} from '@angular/core';

@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html'
})
export class DiveLogFormComponent {
  specialDives = [
    "Night dive",
    "deep dive",
    "Cave dive"
  ]
}