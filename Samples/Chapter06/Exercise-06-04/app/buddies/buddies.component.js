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
var BuddiesComponent = (function () {
    function BuddiesComponent() {
    }
    BuddiesComponent = __decorate([
        core_1.Component({
            selector: 'yw-buddies',
            template: "\n    <div class=\"row\"\n      acme-border=\"navy\">\n      <div class=\"col-sm-12\">\n        <h2>Dive Buddies Component</h2>\n      </div>\n    </div>\n  ",
            styles: [
                "\n      .row {\n        background-color: #f0f0f0;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], BuddiesComponent);
    return BuddiesComponent;
}());
exports.BuddiesComponent = BuddiesComponent;
//# sourceMappingURL=buddies.component.js.map