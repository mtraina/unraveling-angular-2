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
var menu_item_directive_1 = require('./menu-item.directive');
var MenuSectionDirective = (function () {
    function MenuSectionDirective() {
    }
    __decorate([
        core_2.ContentChildren(menu_item_directive_1.MenuItemDirective), 
        __metadata('design:type', core_2.QueryList)
    ], MenuSectionDirective.prototype, "items", void 0);
    MenuSectionDirective = __decorate([
        core_1.Directive({
            selector: 'menu-section',
            inputs: ['title', 'active'],
        }), 
        __metadata('design:paramtypes', [])
    ], MenuSectionDirective);
    return MenuSectionDirective;
}());
exports.MenuSectionDirective = MenuSectionDirective;
//# sourceMappingURL=menu-section.directive.js.map