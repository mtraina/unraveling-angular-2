import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html'
})
export class DiveLogFormComponent implements OnInit {
  specialDives = [
    "Night dive",
    "Deep dive",
    "Cave dive"
  ]

  entry: DiveLogEntry = {
    site: 'Shab El Erg',
    location: 'Hurghada, Egypt',
    depth: 125,
    time: 56,
    isFavorite: true,
    special: "Deep dive"
  }

  @Input() diveLogForm: FormGroup;

  ngOnInit() {
    this.diveLogForm = new FormGroup({
      site: new FormControl(this.entry.site,
        Validators.required),
      location: new FormControl(this.entry.location, 
        Validators.required),
      depth: new FormControl(this.entry.depth, 
        Validators.required),
      time: new FormControl(this.entry.time, 
        Validators.required),
      isFavorite: new FormControl(this.entry.isFavorite),
      special: new FormControl(this.entry.special),
      comments: new FormControl(this.entry.comments),
    });
  }

  isInvalid(controlName: string) {
    return this.diveLogForm.controls[controlName].invalid
  }

  submitted = false;
  submittedDive: DiveLogEntry;

  submitForm() {
    this.submittedDive = this.diveLogForm.value;
    this.submitted = true;
  }
}