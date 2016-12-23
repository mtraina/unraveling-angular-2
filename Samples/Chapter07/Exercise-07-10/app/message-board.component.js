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
var MessageBoardComponent = (function () {
    function MessageBoardComponent() {
        this.messages = [];
    }
    MessageBoardComponent = __decorate([
        core_1.Component({
            selector: 'yw-messages',
            template: "\n    <div>\n      <ng-content select=\"header\"></ng-content>\n      <ul>\n        <li *ngFor=\"let message of messages\">\n          {{message}}\n        </li>\n      </ul>\n      <ng-content select=\"footer\"></ng-content>\n    </div>\n  ",
            inputs: ['messages']
        }), 
        __metadata('design:paramtypes', [])
    ], MessageBoardComponent);
    return MessageBoardComponent;
}());
exports.MessageBoardComponent = MessageBoardComponent;
//# sourceMappingURL=message-board.component.js.map