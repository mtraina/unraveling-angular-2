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
var game_component_1 = require('./game.component');
var DiverComponent = (function () {
    function DiverComponent(parent) {
        this.parent = parent;
        this.tokensFound = 0;
    }
    DiverComponent.prototype.found = function () {
        this.tokensFound++;
        this.parent.tokenFound(1);
    };
    DiverComponent.prototype.lost = function () {
        this.tokensFound--;
        this.parent.tokenFound(-1);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], DiverComponent.prototype, "name", void 0);
    DiverComponent = __decorate([
        core_1.Component({
            selector: 'yw-diver',
            templateUrl: 'app/diver.template.html'
        }), 
        __metadata('design:paramtypes', [game_component_1.GameComponent])
    ], DiverComponent);
    return DiverComponent;
}());
exports.DiverComponent = DiverComponent;
//# sourceMappingURL=diver.component.js.map