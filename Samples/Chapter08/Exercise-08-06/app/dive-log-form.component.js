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
var DiveLogFormComponent = (function () {
    function DiveLogFormComponent() {
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
    }
    DiveLogFormComponent = __decorate([
        core_1.Component({
            selector: 'dive-log-form',
            templateUrl: 'app/dive-log-form.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DiveLogFormComponent);
    return DiveLogFormComponent;
}());
exports.DiveLogFormComponent = DiveLogFormComponent;
//# sourceMappingURL=dive-log-form.component.js.map