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
var ActionableDirective = (function () {
    function ActionableDirective(element) {
        this.element = element;
        this.onAction = new core_2.EventEmitter();
    }
    ActionableDirective.prototype.onMouseEnter = function () {
        this.setAppearance(this.backgroundColor || 'green', 'pointer');
    };
    ActionableDirective.prototype.onMouseLeave = function () {
        this.setAppearance(null, null);
    };
    ActionableDirective.prototype.onClick = function () {
        this.onAction.emit(null);
    };
    ActionableDirective.prototype.setAppearance = function (color, cursor) {
        var style = this.element.nativeElement.style;
        style.backgroundColor = color;
        style.cursor = cursor;
    };
    __decorate([
        core_2.Input('ywActionable'), 
        __metadata('design:type', String)
    ], ActionableDirective.prototype, "backgroundColor", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], ActionableDirective.prototype, "onAction", void 0);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ActionableDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ActionableDirective.prototype, "onMouseLeave", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ActionableDirective.prototype, "onClick", null);
    ActionableDirective = __decorate([
        core_1.Directive({
            selector: '[ywActionable]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ActionableDirective);
    return ActionableDirective;
}());
exports.ActionableDirective = ActionableDirective;
//# sourceMappingURL=actionable.directive.js.map