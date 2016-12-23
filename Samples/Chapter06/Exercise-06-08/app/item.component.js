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
var ItemComponent = (function () {
    function ItemComponent(inventory) {
        this.inventory = inventory;
        this.selected = false;
    }
    ItemComponent.prototype.toggle = function () {
        this.inventory.toggle(this.name, this.owner);
        this.selected = this.inventory.hasItem(this.name);
    };
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'gear-item',
            template: "\n    <button class=\"btn\"\n      [style.margin-bottom.px]=\"4\"\n      [class.btn-success]=\"selected\"\n      [class.btn-danger]=\"!selected\"\n      (click)=\"toggle()\">\n      {{name}}\n    </button>\n  ",
            inputs: ['name', 'owner']
        }), 
        __metadata('design:paramtypes', [inventory_service_1.InventoryService])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map