import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html',
  styleUrls: ['app/dive-log-form.styles.css']
})
export class DiveLogFormComponent {
  submitted = false;

  specialDives = [
    "Night dive",
    "deep dive",
    "Cave dive"
  ]

  entry: DiveLogEntry = {
    site: 'Shab El Erg',
    location: 'Hurgada, Egypt',
    depth: 125,
    time: 56,
    isFavorite: true,
    special: 'Deep dive'
  }

  submitForm(){
    this.submitted = true;
  }
}