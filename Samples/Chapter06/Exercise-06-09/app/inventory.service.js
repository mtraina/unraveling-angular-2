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
var InventoryService = (function () {
    function InventoryService() {
        this._items = {};
    }
    InventoryService.prototype.getItems = function () {
        return this._items;
    };
    InventoryService.prototype.hasItem = function (key) {
        return !!this._items[key];
    };
    InventoryService.prototype.toggle = function (key, owner) {
        if (this._items[key]) {
            delete this._items[key];
        }
        else {
            this._items[key] = this._defaultOwner || owner;
        }
    };
    InventoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InventoryService);
    return InventoryService;
}());
exports.InventoryService = InventoryService;
var TracedInventoryService = (function () {
    function TracedInventoryService() {
        this._items = {};
    }
    TracedInventoryService.prototype.getItems = function () {
        return this._items;
    };
    TracedInventoryService.prototype.hasItem = function (key) {
        return !!this._items[key];
    };
    TracedInventoryService.prototype.toggle = function (key, owner) {
        if (this._items[key]) {
            delete this._items[key];
            console.log("Removed ==> " + key + ": " + owner);
        }
        else {
            this._items[key] = this._defaultOwner || owner;
            console.log("Added ==> " + key + ": " + owner);
        }
    };
    TracedInventoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TracedInventoryService);
    return TracedInventoryService;
}());
exports.TracedInventoryService = TracedInventoryService;
//# sourceMappingURL=inventory.service.js.map