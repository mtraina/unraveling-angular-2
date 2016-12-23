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
var core_2 = require('@angular/core');
var dive_log_entry_1 = require('./dive-log-entry');
var search_box_component_1 = require('./search-box.component');
var DiveLogComponent = (function () {
    function DiveLogComponent() {
        this.dives = dive_log_entry_1.DiveLogEntry.StockDives;
    }
    DiveLogComponent.prototype.searchFor = function (key) {
        this.searchBox.searchText = key;
        console.log("New search text: " + this.searchBox.searchText);
    };
    DiveLogComponent.prototype.ngAfterViewInit = function () {
        if (this.searchBox)
            console.log('searchBox initialized.');
    };
    __decorate([
        core_2.ViewChild(search_box_component_1.SearchBoxComponent), 
        __metadata('design:type', search_box_component_1.SearchBoxComponent)
    ], DiveLogComponent.prototype, "searchBox", void 0);
    DiveLogComponent = __decorate([
        core_1.Component({
            selector: 'divelog',
            templateUrl: 'app/dive-log.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DiveLogComponent);
    return DiveLogComponent;
}());
exports.DiveLogComponent = DiveLogComponent;
//# sourceMappingURL=dive-log.component.js.map