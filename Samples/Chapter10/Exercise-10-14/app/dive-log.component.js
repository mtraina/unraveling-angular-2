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
var DiveLogComponent = (function () {
    function DiveLogComponent() {
        this.dives = dive_log_entry_1.DiveLogEntry.StockDives;
    }
    DiveLogComponent.prototype.myself = function () {
        return this;
    };
    DiveLogComponent.prototype.addDives = function () {
        var _this = this;
        this.dives = this.dives.slice(0);
        dive_log_entry_1.DiveLogEntry.ExtraDives.forEach(function (item) {
            _this.dives.push(item);
        });
    };
    DiveLogComponent = __decorate([
        core_1.Component({
            selector: 'divelog',
            templateUrl: 'app/dive-log.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DiveLogComponent);
    return DiveLogComponent;
}());
exports.DiveLogComponent = DiveLogComponent;
//# sourceMappingURL=dive-log.component.js.map