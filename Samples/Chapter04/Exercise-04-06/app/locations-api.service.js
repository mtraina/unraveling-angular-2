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
require('rxjs/add/operator/toPromise');
var URL = 'http://unraveling-ng.azurewebsites.net/api/dive/location/';
var USER_ID = 'b3f15a1b-8d0e-4e80-8b96-c36e66547481';
var USER_SECRET = 'd6deac91eba6453bb6ad78c61e8052b616d2d830db20463ea6b4d8be918e29df6a0a4a1ebdab46eb9cdd6b7ab319QQQQ';
var LocationsApiService = (function () {
    function LocationsApiService(http) {
        this.http = http;
        this.locations = [];
    }
    LocationsApiService.prototype.getLocations = function () {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(URL, options).toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    LocationsApiService.prototype.getLocationById = function (id) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(URL + id, options).toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    LocationsApiService.prototype.addLocation = function (location) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.post(URL, location, options).toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    LocationsApiService.prototype.removeLocation = function (id) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.delete(URL + id, options).toPromise()
            .then()
            .catch(this.handleError);
    };
    LocationsApiService.prototype.updateLocation = function (location) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.put(URL, location, options).toPromise()
            .then()
            .catch(this.handleError);
    };
    LocationsApiService.prototype.getHeaders = function () {
        return new http_1.Headers({
            'Authorization': "TenantSecret " + USER_ID + "," + USER_SECRET
        });
    };
    LocationsApiService.prototype.handleError = function (err) {
        var errMsg = (err.message)
            ? err.message
            : err.status ? err.status + ": " + err.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    LocationsApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LocationsApiService);
    return LocationsApiService;
}());
exports.LocationsApiService = LocationsApiService;
//# sourceMappingURL=locations-api.service.js.map