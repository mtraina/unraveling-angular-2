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
var message_bus_service_1 = require('./message-bus.service');
var GameComponent = (function () {
    function GameComponent(messenger) {
        this.messenger = messenger;
        this.tokens = 4;
        this.collected = 0;
        this.divers = ["Bob", "Cecile", "Jake"];
    }
    GameComponent.prototype.tokenFound = function (newTokens) {
        this.collected += newTokens;
        if (this.messenger) {
            this.messenger.sendMessage("Game ==> Tokens found: " + this.collected);
        }
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'yw-game',
            templateUrl: 'app/game.template.html'
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [message_bus_service_1.MessageBusService])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map