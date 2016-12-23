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
var LogBoardComponent = (function () {
    function LogBoardComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LogBoardComponent.prototype, "messages", void 0);
    LogBoardComponent = __decorate([
        core_1.Component({
            selector: 'log-board',
            template: "\n    <div>\n      <span *ngFor=\"let message of messages\"\n        class=\"message\">\n        {{message}}\n      </span>\n    </div>\n  ",
            styles: ["\n    .message {\n      display: inline-block;\n      background-color: #e0e0e0;\n      border: 1px solid #808080;\n      padding: 2px 4px;\n      margin: 4px 4px 0 0;\n      border-radius: 2px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], LogBoardComponent);
    return LogBoardComponent;
}());
exports.LogBoardComponent = LogBoardComponent;
//# sourceMappingURL=log-board.component.js.map