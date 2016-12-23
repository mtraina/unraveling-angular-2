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
var NumberListComponent = (function () {
    function NumberListComponent() {
        this.numbers = [];
        this.start = 0;
        this.end = 100;
        for (var i = 0; i < 100; i++) {
            this.numbers.push(i);
        }
    }
    NumberListComponent.prototype.toValue = function (input, defValue) {
        var value = parseInt(input);
        if (isNaN(value)) {
            return defValue;
        }
        else {
            return value;
        }
    };
    NumberListComponent = __decorate([
        core_1.Component({
            selector: 'number-list',
            templateUrl: 'app/number-list.template.html',
            styles: ["\n    .number {\n      display: inline-block;\n      background: #e0e0e0;\n      border-radius: 4px;\n      margin: 4px;\n      padding: 4px 8px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NumberListComponent);
    return NumberListComponent;
}());
exports.NumberListComponent = NumberListComponent;
//# sourceMappingURL=number-list.component.js.map