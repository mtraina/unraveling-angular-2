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
var LogBookComponent = (function () {
    function LogBookComponent() {
    }
    LogBookComponent = __decorate([
        core_1.Component({
            selector: 'yw-log-book',
            template: "\n    <div class=\"row\"\n      gc-highlight=\"red\"\n      acme-border=\"green\">\n      <div class=\"col-sm-12\">\n        <h2>Log Book Component</h2>\n      </div>\n    </div>\n  ",
            styles: [
                "\n      .row {\n        background-color: #d0d0d0;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LogBookComponent);
    return LogBookComponent;
}());
exports.LogBookComponent = LogBookComponent;
//# sourceMappingURL=log-book.component.js.map