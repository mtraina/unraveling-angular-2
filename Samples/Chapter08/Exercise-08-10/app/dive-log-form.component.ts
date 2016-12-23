import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {AbstractControl, FormBuilder} from '@angular/forms'
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
      depth: [this.entry.depth, 
        [Validators.required, this.depthValidator]],
      time: [this.entry.depth, 
        [Validators.required, this.timeValidator]],
      isFavorite: [this.entry.isFavorite], 
      special: [this.entry.special],
      comments: [this.entry.comments]
    });
  }

  depthValidator(control: AbstractControl): {[key:string]: any} {
    let value = control.value;
    if (!value) return null;
    if (isNaN(value)) {
      return { NaN: true };
    } else {
      let depth = parseInt(value, 10);
      if (depth >= 0 && depth <= 130) {
        return null;
      }
    }
    return { depth: {min: 0, max: 130} };
  }

  timeValidator(control: AbstractControl): {[key:string]: any} {
    let value = control.value;
    if (!value) return null;
    if (isNaN(value)) {
      return { NaN: true };
    } else {
      let time = parseInt(value, 10);
      if (time >= 0 && time <= 240) {
        return null;
      }
    }
    return { time: {min: 0, max: 240} };
  }

  isInvalid(controlName: string) {
    return this.diveLogForm.controls[controlName].invalid
  }

  getValidationMessage(controlName: string) {
    let message = '';
    let control = this.diveLogForm.get(controlName);
    if (control) {
      let messages = this.validationMessages[controlName];
      if (messages && control.errors) {
        for (const key in control.errors) {
          message += messages[key] + ' ';
        }
      }
    }
    return message == '' 
      ? 'Control value is invalid.'
      : message;
  }

  validationMessages = {
    site: {
      required: 'Please specify a site name',
    },
    location: {
      required: 'Please specify a location',
    },
    depth: {
      required: 'Please specify a depth',
      NaN: 'Value must be a number',
      depth: 'Depth must be between 0 and 130'
    },
    time: {
      required: 'Please specify a time',
      NaN: 'Value must be a number',
      time: 'Time must be between 0 and 240'
    },
  };

  submitted = false;
  submittedDive: DiveLogEntry;

  submitForm() {
    this.submittedDive = this.diveLogForm.value;
    this.submitted = true;
  }
}