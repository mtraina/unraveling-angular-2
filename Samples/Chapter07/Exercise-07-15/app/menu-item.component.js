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
var MenuItemComponent = (function () {
    function MenuItemComponent() {
        this.onSelected = new core_2.EventEmitter();
    }
    MenuItemComponent.prototype.select = function () {
        this.onSelected.emit(this.title);
    };
    MenuItemComponent = __decorate([
        core_1.Component({
            selector: 'menu-item',
            template: "\n    <div class=\"title\"\n      [class.last]=\"last\"\n      (click)=\"select()\">\n      {{title}}\n    </div>\n  ",
            styles: ["\n    .title {\n      background-color: #e0e0e0;\n      border: 1px solid darkgray;\n      border-bottom: 0;\n      color: navy;\n      font-size: 1.2em;\n      padding: 8px 16px;\n      cursor: pointer;\n    }\n    .title:hover {\n      background-color: #c0c0c0;\n    }\n    .last {\n      border-bottom: 1px solid darkgray;\n    }\n  "],
            inputs: ['title', 'last'],
            outputs: ['onSelected']
        }), 
        __metadata('design:paramtypes', [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());
exports.MenuItemComponent = MenuItemComponent;
//# sourceMappingURL=menu-item.component.js.map