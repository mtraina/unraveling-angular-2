import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
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

  constructor (private builder: FormBuilder) { }

  @Input() diveLogForm: FormGroup;

  ngOnInit() {
    this.diveLogForm = this.builder.group({
      site: [this.entry.site, Validators.required],
      location: [this.entry.location, Validators.required],
      depth: [this.entry.depth, Validators.required],
      time: [this.entry.depth, Validators.required],
      isFavorite: [this.entry.isFavorite], 
      special: [this.entry.special],
      comments: [this.entry.comments]
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