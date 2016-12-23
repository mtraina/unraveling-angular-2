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
var mousepad_component_1 = require('./mousepad.component');
var AppComponent = (function () {
    function AppComponent() {
        this.messages = [];
        this.counter = 0;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mousepad.mouseEvents$.subscribe(function (m) {
            _this.log("(" + m.clientX + ", " + m.clientY + ")");
        }, function () { _this.log("Error!"); }, function () { _this.log("Completed."); });
    };
    AppComponent.prototype.log = function (message) {
        this.messages.push(message);
    };
    __decorate([
        core_2.ViewChild(mousepad_component_1.MousepadComponent), 
        __metadata('design:type', mousepad_component_1.MousepadComponent)
    ], AppComponent.prototype, "mousepad", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yw-app',
            template: "\n    <div class=\"container\">\n      <mousepad></mousepad>\n      <log-board [messages]=\"messages\"></log-board>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map