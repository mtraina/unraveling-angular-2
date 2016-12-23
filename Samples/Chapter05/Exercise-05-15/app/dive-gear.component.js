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
var gear_item_component_1 = require('./gear-item.component');
var DiveGearComponent = (function () {
    function DiveGearComponent() {
        this.dbItems = [
            { id: 1, name: 'Technisub Look mask' },
            { id: 2, name: 'Cressy fins' },
            { id: 3, name: 'Aqualung TechSuit' },
            { id: 4, name: 'Oceanic Pro BCD' },
            { id: 5, name: 'Scubapro regulator' },
            { id: 6, name: 'Suunto D9 computer' },
            { id: 7, name: 'Coltrisub cylinder' },
        ];
        this.initialList = [];
        this.queryCount = 0;
        this.listChangeCount = 0;
        this.itemChangeCount = 0;
        this.requery();
    }
    DiveGearComponent.prototype.requery = function () {
        this.queryCount++;
        var newQuery = [];
        for (var i = 0; i < this.dbItems.length; i++) {
            newQuery.push({
                id: this.dbItems[i].id,
                name: this.dbItems[i].name
            });
        }
        this.gearItems = newQuery;
    };
    DiveGearComponent.prototype.reverse = function () {
        var newQuery = [];
        for (var i = this.gearItems.length - 1; i >= 0; i--) {
            newQuery.push({
                id: this.gearItems[i].id,
                name: this.gearItems[i].name
            });
        }
        this.gearItems = newQuery;
    };
    DiveGearComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initialList = this.gearsInList.toArray();
        this.gearsInList.changes.subscribe(function (changes) {
            var changesArray = changes.toArray();
            var itemChanges = 0;
            var _loop_1 = function(i) {
                var isIdentical = _this.initialList.find(function (g) { return g === changesArray[i]; });
                if (!isIdentical)
                    itemChanges++;
            };
            for (var i = 0; i < changesArray.length; i++) {
                _loop_1(i);
            }
            setTimeout(function () {
                _this.listChangeCount++;
                _this.itemChangeCount += itemChanges;
            }, 0);
        });
    };
    __decorate([
        core_1.ViewChildren(gear_item_component_1.GearItemComponent), 
        __metadata('design:type', core_1.QueryList)
    ], DiveGearComponent.prototype, "gearsInList", void 0);
    DiveGearComponent = __decorate([
        core_1.Component({
            selector: 'dive-gear',
            templateUrl: 'app/dive-gear.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DiveGearComponent);
    return DiveGearComponent;
}());
exports.DiveGearComponent = DiveGearComponent;
//# sourceMappingURL=dive-gear.component.js.map