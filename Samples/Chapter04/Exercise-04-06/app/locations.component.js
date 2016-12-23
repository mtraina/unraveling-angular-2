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
var locations_api_service_1 = require('./locations-api.service');
var LocationsComponent = (function () {
    function LocationsComponent(api) {
        this.api = api;
        this.rings = [];
        this.locations = [];
        this.reset();
        this.refresh();
    }
    LocationsComponent.prototype.reset = function () {
        this.isInAddMode = false;
        this.editMode = false;
        this.deleteMode = false;
        this.selectedId = -1;
        this.errorMessage = null;
    };
    LocationsComponent.prototype.isLoading = function () {
        return this.isBusy(-2);
    };
    LocationsComponent.prototype.isBusy = function (id) {
        return id
            ? this.rings.indexOf(id) >= 0
            : this.rings.length > 0;
    };
    LocationsComponent.prototype.isInReadMode = function (id) {
        return this.selectedId < 0 || this.selectedId != id;
    };
    LocationsComponent.prototype.isInEditMode = function (id) {
        return this.selectedId == id && this.editMode;
    };
    LocationsComponent.prototype.isInRemoveMode = function (id) {
        return this.selectedId == id && this.deleteMode;
    };
    LocationsComponent.prototype.startAdd = function () {
        this.reset();
        this.selectedId = -1;
        this.isInAddMode = true;
        this.locationName = '';
    };
    LocationsComponent.prototype.startEdit = function (id) {
        this.reset();
        this.selectedId = id;
        this.editMode = true;
        for (var i = 0; i < this.locations.length; i++) {
            var item = this.locations[i];
            if (item.id == id) {
                this.locationName = item.displayName;
            }
        }
    };
    LocationsComponent.prototype.startRemove = function (id) {
        this.reset();
        this.selectedId = id;
        this.deleteMode = true;
    };
    LocationsComponent.prototype.add = function () {
        var _this = this;
        this.useBackend(-1, function () {
            return _this.api.addLocation({
                id: 0,
                displayName: _this.locationName
            });
        });
    };
    LocationsComponent.prototype.save = function () {
        var _this = this;
        this.useBackend(this.selectedId, function () {
            return _this.api.updateLocation({
                id: _this.selectedId,
                displayName: _this.locationName
            });
        });
    };
    LocationsComponent.prototype.remove = function (id) {
        var _this = this;
        this.useBackend(id, function () {
            return _this.api.removeLocation(id);
        });
    };
    LocationsComponent.prototype.busy = function (id) {
        if (this.isBusy(id)) {
            return;
        }
        this.rings.push(id);
    };
    LocationsComponent.prototype.complete = function (id) {
        var idx = this.rings.indexOf(id);
        if (idx < 0) {
            return;
        }
        this.rings.splice(idx, 1);
    };
    LocationsComponent.prototype.refresh = function () {
        var _this = this;
        this.busy(-2);
        this.api.getLocations()
            .then(function (locations) {
            _this.locations = locations;
            _this.complete(-2);
        })
            .catch(function (err) {
            _this.errorMessage = err;
            _this.complete(-2);
        });
        this.reset();
    };
    LocationsComponent.prototype.useBackend = function (id, operation) {
        var _this = this;
        this.busy(id);
        operation()
            .then(function (data) {
            _this.refresh();
            _this.complete(id);
        })
            .catch(function (err) {
            _this.errorMessage = err;
            _this.complete(id);
        });
    };
    LocationsComponent = __decorate([
        core_1.Component({
            selector: 'ywLocations',
            templateUrl: 'app/locations.template.html',
            styles: ["\n    .oddRow {\n      background-color: #dddddd;\n    }\n\n    .list-name {\n      margin-top: 13px;\n      margin-bottom: 14px;\n    }\n\n    .button-space {\n      margin-top: 8px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [locations_api_service_1.LocationsApiService])
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;
//# sourceMappingURL=locations.component.js.map