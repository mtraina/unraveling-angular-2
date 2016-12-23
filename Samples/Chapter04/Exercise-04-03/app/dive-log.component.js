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
var dive_log_api_service_1 = require('./dive-log-api.service');
var DiveLogComponent = (function () {
    function DiveLogComponent(api) {
        this.api = api;
        this.loading = false;
        this.errorMessage = null;
    }
    DiveLogComponent.prototype.refreshDives = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = null;
        this.dives = [];
        this.api.getDives()
            .then(function (data) {
            _this.dives = data;
            _this.loading = false;
        })
            .catch(function (errMsg) {
            _this.errorMessage = errMsg;
            _this.loading = false;
        });
    };
    DiveLogComponent = __decorate([
        core_1.Component({
            selector: 'divelog',
            templateUrl: 'app/dive-log.template.html'
        }), 
        __metadata('design:paramtypes', [dive_log_api_service_1.DiveLogApi])
    ], DiveLogComponent);
    return DiveLogComponent;
}());
exports.DiveLogComponent = DiveLogComponent;
//# sourceMappingURL=dive-log.component.js.map