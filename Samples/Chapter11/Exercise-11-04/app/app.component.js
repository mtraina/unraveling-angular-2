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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/filter');
var AppComponent = (function () {
    function AppComponent() {
        this.messages = [];
        this.subscription = null;
        this.counter = 0;
    }
    AppComponent.prototype.log = function (message) {
        this.messages.push(message);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var mousepad = document.getElementById('mousepad');
        this.mouseOver$ = Observable_1.Observable
            .fromEvent(mousepad, 'mousemove')
            .filter(function (value) { return _this.counter++ % 10 == 0; });
        this.toggleSubscribe();
    };
    AppComponent.prototype.toggleSubscribe = function () {
        var _this = this;
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
            this.log('Cancelled');
        }
        else {
            this.subscription = this.mouseOver$.subscribe(function (m) {
                _this.log("(" + m.clientX + ", " + m.clientY + ")");
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yw-app',
            template: "\n    <div class=\"container\">\n      <div class=\"col-sm-12 mousepad\"\n        id=\"mousepad\"\n        [class.subscribed]=\"subscription\"\n        (click)=\"toggleSubscribe()\">\n      </div>\n      <log-board [messages]=\"messages\"></log-board>\n    </div>\n  ",
            styles: ["\n    .mousepad {\n      margin: 24px 0;\n      background-color: #e0e0f0;\n      border: 1px dotted #808080;\n      height: 300px;\n    }\n   .subscribed {\n      background-color: #b0b0f0;\n   }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map