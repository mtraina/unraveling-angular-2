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
var core_1 = require("@angular/core");
var dive_log_entry_1 = require("./dive-log-entry");
var DiveLogApi = DiveLogApi_1 = (function () {
    function DiveLogApi() {
    }
    DiveLogApi.prototype.getDives = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (DiveLogApi_1.counter % 3 == 0) {
                    reject("Error: Call counter is " + DiveLogApi_1.counter);
                }
                else {
                    resolve(dive_log_entry_1.DiveLogEntry.StockDives);
                }
            }, 1000);
        });
    };
    return DiveLogApi;
}());
DiveLogApi.counter = 0;
DiveLogApi = DiveLogApi_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DiveLogApi);
exports.DiveLogApi = DiveLogApi;
var DiveLogApi_1;
//# sourceMappingURL=dive-log-api.service.js.map