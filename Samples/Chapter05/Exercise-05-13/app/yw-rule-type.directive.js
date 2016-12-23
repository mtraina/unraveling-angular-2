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
var RuleTypeDirective = (function () {
    function RuleTypeDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(RuleTypeDirective.prototype, "ywDay", {
        set: function (ruleType) {
            this.createOrDestroy(ruleType == 'day');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTypeDirective.prototype, "ywNight", {
        set: function (ruleType) {
            this.createOrDestroy(ruleType != 'day');
        },
        enumerable: true,
        configurable: true
    });
    RuleTypeDirective.prototype.createOrDestroy = function (create) {
        if (create) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    };
    RuleTypeDirective = __decorate([
        core_1.Directive({
            selector: '[ywDay],[ywNight]',
            inputs: ['ywDay', 'ywNight']
        }), 
        __metadata('design:paramtypes', [core_2.TemplateRef, core_2.ViewContainerRef])
    ], RuleTypeDirective);
    return RuleTypeDirective;
}());
exports.RuleTypeDirective = RuleTypeDirective;
//# sourceMappingURL=yw-rule-type.directive.js.map