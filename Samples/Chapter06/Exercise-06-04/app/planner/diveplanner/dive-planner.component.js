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
var DivePlannerComponent = (function () {
    function DivePlannerComponent() {
    }
    DivePlannerComponent = __decorate([
        core_1.Component({
            selector: 'yw-dive-planner',
            template: "\n    <div class=\"col-sm-6\"\n      gc-highlight=\"red\">\n      <h3>Dive Planner Component</h3>\n    </div>\n  ",
            styles: [
                "\n      .col-sm-6 {\n        background-color: #ffe000;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], DivePlannerComponent);
    return DivePlannerComponent;
}());
exports.DivePlannerComponent = DivePlannerComponent;
//# sourceMappingURL=dive-planner.component.js.map