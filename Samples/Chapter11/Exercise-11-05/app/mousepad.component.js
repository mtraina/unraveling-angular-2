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
var subject_1 = require('rxjs/subject');
var MousepadComponent = (function () {
    function MousepadComponent() {
        this.counter = 0;
        this.eventSource = new subject_1.Subject();
        this.mouseEvents$ = this.eventSource.asObservable();
    }
    MousepadComponent.prototype.onMouseMove = function (e) {
        this.counter++;
        if (this.counter % 10 == 0) {
            this.eventSource.next(e);
        }
        if (this.counter % 200 == 0) {
            this.eventSource.error("error");
        }
    };
    MousepadComponent.prototype.onClick = function () {
        this.eventSource.complete();
    };
    MousepadComponent = __decorate([
        core_1.Component({
            selector: 'mousepad',
            template: "\n    <div class=\"col-sm-12\"\n      (mousemove)=\"onMouseMove($event)\"\n      (click)=\"onClick()\">\n    </div>\n  ",
            styles: ["\n    div {\n      margin: 24px 0;\n      background-color: #e0e0f0;\n      border: 1px dotted #808080;\n      height: 300px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], MousepadComponent);
    return MousepadComponent;
}());
exports.MousepadComponent = MousepadComponent;
//# sourceMappingURL=mousepad.component.js.map