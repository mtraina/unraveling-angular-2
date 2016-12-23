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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var game_component_1 = require('./game.component');
var message_bus_service_1 = require('./message-bus.service');
var DiverComponent = (function () {
    function DiverComponent(parent, messenger) {
        this.parent = parent;
        this.messenger = messenger;
        this.tokensFound = 0;
    }
    Object.defineProperty(DiverComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            if (this.messenger) {
                this.messenger.sendMessage("Diver name set ==> " + value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DiverComponent.prototype.found = function () {
        this.updateTokens(1);
    };
    DiverComponent.prototype.lost = function () {
        this.updateTokens(-1);
    };
    DiverComponent.prototype.updateTokens = function (count) {
        this.tokensFound += count;
        if (this.messenger) {
            this.messenger.sendMessage(this.name + " ==> " + count);
        }
        this.parent.tokenFound(count);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], DiverComponent.prototype, "name", null);
    DiverComponent = __decorate([
        core_1.Component({
            selector: 'yw-diver',
            templateUrl: 'app/diver.template.html'
        }),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [game_component_1.GameComponent, message_bus_service_1.MessageBusService])
    ], DiverComponent);
    return DiverComponent;
}());
exports.DiverComponent = DiverComponent;
//# sourceMappingURL=diver.component.js.map