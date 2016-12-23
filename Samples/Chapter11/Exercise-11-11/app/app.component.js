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
    }
    __decorate([
        core_2.ViewChild(mousepad_component_1.MousepadComponent), 
        __metadata('design:type', mousepad_component_1.MousepadComponent)
    ], AppComponent.prototype, "mousepad", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yw-app',
            template: "\n    <div class=\"container\">\n      <mousepad></mousepad>\n      <span class=\"message\">\n        ({{ (mousepad.mouseEvents$ | async)?.clientX }},\n         {{ (mousepad.mouseEvents$ | async)?.clientY }})\n      </span>\n    </div>\n  ",
            styles: ["\n    .message {\n      display: inline-block;\n      background-color: #e0e0e0;\n      border: 1px solid #808080;\n      padding: 2px 4px;\n      margin: 4px 4px 0 0;\n      border-radius: 2px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map