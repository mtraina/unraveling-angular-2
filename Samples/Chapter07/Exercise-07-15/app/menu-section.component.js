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
var menu_item_component_1 = require('./menu-item.component');
var MenuSectionComponent = (function () {
    function MenuSectionComponent() {
        this.active = false;
    }
    __decorate([
        core_2.ContentChildren(menu_item_component_1.MenuItemComponent), 
        __metadata('design:type', core_2.QueryList)
    ], MenuSectionComponent.prototype, "items", void 0);
    MenuSectionComponent = __decorate([
        core_1.Component({
            selector: 'menu-section',
            template: "\n    <div class=\"title\">{{title}}</div>\n    <ng-content></ng-content>\n  ",
            styles: ["\n    .title {\n      background-color: navy;\n      border: 1px solid #808020;\n      border-bottom: 0;\n      color: white;\n      font-size: 1.5em;\n      padding: 8px 16px;\n      cursor: pointer;\n    }\n\n    .title:hover {\n      background-color: #404080;\n    }\n\n    .last {\n      border-bottom: 1px solid #808020;\n    }\n\n  "],
            inputs: ['title', 'last', 'active']
        }), 
        __metadata('design:paramtypes', [])
    ], MenuSectionComponent);
    return MenuSectionComponent;
}());
exports.MenuSectionComponent = MenuSectionComponent;
//# sourceMappingURL=menu-section.component.js.map