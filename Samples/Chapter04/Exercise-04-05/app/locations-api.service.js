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
var location_1 = require('./location');
var LocationsApiService = (function () {
    function LocationsApiService() {
        this.locations = location_1.Location.StockLocations;
    }
    LocationsApiService.prototype.getLocations = function () {
        var _this = this;
        return this.defer(100, function () { return _this.locations.slice(0); });
    };
    LocationsApiService.prototype.getLocationById = function (id) {
        var _this = this;
        return this.defer(10, function () {
            var itemId = _this.getLocationIndexById(id);
            if (itemId >= 0) {
                return _this.locations[itemId];
            }
            else {
                return null;
            }
        });
    };
    LocationsApiService.prototype.addLocation = function (location) {
        var _this = this;
        return this.defer(1000, function () {
            var newId = _this.locations.length + 1;
            location.id = newId;
            _this.locations.push(location);
        });
    };
    LocationsApiService.prototype.removeLocation = function (id) {
        var _this = this;
        return this.defer(1000, function () {
            var itemId = _this.getLocationIndexById(id);
            if (itemId >= 0) {
                _this.locations.splice(itemId, 1);
            }
        });
    };
    LocationsApiService.prototype.updateLocation = function (location) {
        var _this = this;
        return this.defer(1000, function () {
            var itemId = _this.getLocationIndexById(location.id);
            if (itemId >= 0) {
                _this.locations[itemId] = location;
            }
        });
    };
    LocationsApiService.prototype.getLocationIndexById = function (id) {
        for (var i = 0; i < this.locations.length; i++) {
            if (this.locations[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    LocationsApiService.prototype.defer = function (time, operation) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var result = operation();
                resolve(result);
            }, time);
        });
    };
    LocationsApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocationsApiService);
    return LocationsApiService;
}());
exports.LocationsApiService = LocationsApiService;
//# sourceMappingURL=locations-api.service.js.map