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
var dive_log_entry_1 = require('./dive-log-entry');
var DiveInfoComponent = (function () {
    function DiveInfoComponent() {
        this.dives = dive_log_entry_1.DiveLogEntry.StockDives;
    }
    DiveInfoComponent.prototype.avgTime = function () {
        var sum = 0.0;
        for (var i = 0; i < this.dives.length; i++) {
            sum += this.dives[i].time;
        }
        return sum / this.dives.length;
    };
    DiveInfoComponent.prototype.avgDepth = function () {
        var sum = 0.0;
        for (var i = 0; i < this.dives.length; i++) {
            sum += this.dives[i].depth;
        }
        return sum / this.dives.length;
    };
    DiveInfoComponent = __decorate([
        core_1.Component({
            selector: 'divelog',
            templateUrl: 'app/dive-info.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DiveInfoComponent);
    return DiveInfoComponent;
}());
exports.DiveInfoComponent = DiveInfoComponent;
//# sourceMappingURL=dive-info.component.js.map