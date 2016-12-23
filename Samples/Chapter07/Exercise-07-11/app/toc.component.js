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
var hn_directive_1 = require('./hn.directive');
var header_directive_1 = require('./header.directive');
var TocComponent = (function () {
    function TocComponent() {
        this.level = 2;
    }
    TocComponent.prototype.getFilteredElements = function () {
        var _this = this;
        return this.elements.toArray().filter(function (e) { return e.level <= _this.level; });
    };
    __decorate([
        core_2.ContentChild(header_directive_1.HeaderDirective), 
        __metadata('design:type', Object)
    ], TocComponent.prototype, "header", void 0);
    __decorate([
        core_2.ContentChildren(hn_directive_1.HnDirective), 
        __metadata('design:type', core_2.QueryList)
    ], TocComponent.prototype, "elements", void 0);
    TocComponent = __decorate([
        core_1.Component({
            selector: 'yw-toc',
            template: "\n    <div>\n      <h2>{{header.text}}</h2>\n      <div *ngFor=\"let element of getFilteredElements()\"\n        [style.padding-left.px]=\"40*(element.level-1)\"\n        [style.font-size.em]=\"1.8-(element.level-1)*0.25\">\n        {{element.text}}\n      </div>\n    </div>\n  ",
            inputs: ['level']
        }), 
        __metadata('design:paramtypes', [])
    ], TocComponent);
    return TocComponent;
}());
exports.TocComponent = TocComponent;
//# sourceMappingURL=toc.component.js.map