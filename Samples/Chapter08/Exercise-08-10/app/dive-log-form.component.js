"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var DiveLogFormComponent = (function () {
    function DiveLogFormComponent(builder) {
        this.builder = builder;
        this.specialDives = [
            "Night dive",
            "Deep dive",
            "Cave dive"
        ];
        this.entry = {
            site: 'Shab El Erg',
            location: 'Hurghada, Egypt',
            depth: 125,
            time: 56,
            isFavorite: true,
            special: "Deep dive"
        };
        this.validationMessages = {
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
        this.submitted = false;
    }
    DiveLogFormComponent.prototype.ngOnInit = function () {
        this.diveLogForm = this.builder.group({
            site: [this.entry.site, forms_1.Validators.required],
            location: [this.entry.location, forms_1.Validators.required],
            depth: [this.entry.depth,
                [forms_1.Validators.required, this.depthValidator]],
            time: [this.entry.depth,
                [forms_1.Validators.required, this.timeValidator]],
            isFavorite: [this.entry.isFavorite],
            special: [this.entry.special],
            comments: [this.entry.comments]
        });
    };
    DiveLogFormComponent.prototype.depthValidator = function (control) {
        var value = control.value;
        if (!value)
            return null;
        if (isNaN(value)) {
            return { NaN: true };
        }
        else {
            var depth = parseInt(value, 10);
            if (depth >= 0 && depth <= 130) {
                return null;
            }
        }
        return { depth: { min: 0, max: 130 } };
    };
    DiveLogFormComponent.prototype.timeValidator = function (control) {
        var value = control.value;
        if (!value)
            return null;
        if (isNaN(value)) {
            return { NaN: true };
        }
        else {
            var time = parseInt(value, 10);
            if (time >= 0 && time <= 240) {
                return null;
            }
        }
        return { time: { min: 0, max: 240 } };
    };
    DiveLogFormComponent.prototype.isInvalid = function (controlName) {
        return this.diveLogForm.controls[controlName].invalid;
    };
    DiveLogFormComponent.prototype.getValidationMessage = function (controlName) {
        var message = '';
        var control = this.diveLogForm.get(controlName);
        if (control) {
            var messages = this.validationMessages[controlName];
            if (messages && control.errors) {
                for (var key in control.errors) {
                    message += messages[key] + ' ';
                }
            }
        }
        return message == ''
            ? 'Control value is invalid.'
            : message;
    };
    DiveLogFormComponent.prototype.submitForm = function () {
        this.submittedDive = this.diveLogForm.value;
        this.submitted = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], DiveLogFormComponent.prototype, "diveLogForm", void 0);
    DiveLogFormComponent = __decorate([
        core_1.Component({
            selector: 'dive-log-form',
            templateUrl: 'app/dive-log-form.template.html'
        }), 
        __metadata('design:paramtypes', [forms_2.FormBuilder])
    ], DiveLogFormComponent);
    return DiveLogFormComponent;
}());
exports.DiveLogFormComponent = DiveLogFormComponent;
//# sourceMappingURL=dive-log-form.component.js.map