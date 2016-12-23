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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/retrywhen');
require('rxjs/add/operator/delay');
var DiveLogApi = (function () {
    function DiveLogApi(http) {
        this.http = http;
        this._count = 0;
        this._isRetry = false;
        this.DIVE_LOG_API_URL = 'http://unraveling-ng.azurewebsites.net/api/backendtest/dives';
    }
    DiveLogApi.prototype.getDives = function () {
        var _this = this;
        return this.http.get(this.DIVE_LOG_API_URL)
            .map(function (resp) {
            if (_this._isRetry) {
                _this._isRetry = false;
                return resp;
            }
            if (++_this._count % 3 != 0)
                return resp;
            throw { message: 'Fake error' };
        })
            .map(function (resp) { return resp.json() || []; })
            .retryWhen(function (source) {
            console.log('Retrying...');
            _this._isRetry = true;
            return source.delay(1000);
        })
            .catch(function (err) {
            var errMsg = (err.message)
                ? err.message
                : err.status ? err.status + ": " + err.statusText : 'Server error';
            console.error(errMsg);
            return Observable_1.Observable.throw(errMsg);
        });
    };
    DiveLogApi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DiveLogApi);
    return DiveLogApi;
}());
exports.DiveLogApi = DiveLogApi;
//# sourceMappingURL=dive-log-api.service.js.map