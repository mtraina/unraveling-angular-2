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
var inventory_service_1 = require('./inventory.service');
var DiverComponent = (function () {
    function DiverComponent(inventory) {
        this.inventory = inventory;
    }
    DiverComponent = __decorate([
        core_1.Component({
            selector: 'diver',
            template: "\n    <div class=\"col-sm-3\">\n      <h2>{{name}}</h2>\n      <gear-item *ngFor=\"let item of items\"\n        [name]=\"item\"\n        [owner]=\"name\">\n      </gear-item>\n      <pre>{{inventory.getItems() | json}}</pre>\n    </div>\n  ",
            inputs: ['name', 'items']
        }), 
        __metadata('design:paramtypes', [inventory_service_1.InventoryService])
    ], DiverComponent);
    return DiverComponent;
}());
exports.DiverComponent = DiverComponent;
//# sourceMappingURL=diver.component.js.map