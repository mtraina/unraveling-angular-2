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
var AppComponent = (function () {
    function AppComponent() {
        this.displayMenu = false;
        this.defaultColor = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yw-app',
            template: "\n    <div class=\"container-fluid\">\n      <h1>Scuba Diving News</h1>\n      <button class=\"btn btn-default\"\n        [disabled]=\"displayMenu\"\n        (click)=\"displayMenu=true\">\n        Show menu\n      </button>\n      <button class=\"btn btn-default\"\n        (click)=\"defaultColor=!defaultColor\">\n        Toggle color\n      </button>\n      <button class=\"btn btn-default\"\n        [disabled]=\"!displayMenu\"\n        (click)=\"displayMenu=false\">\n        Hide menu\n      </button>\n      <div [style.width.px]=\"200\"\n        [style.margin-top.px]=\"12\">\n        <yw-menu #menu *ngIf=\"displayMenu\"\n          [useDefaultColor]=\"defaultColor\">\n          <menu-section title=\"Red Sea\">\n            <menu-item title=\"News #1\"></menu-item>\n            <menu-item title=\"News #2\"></menu-item>\n            <menu-item title=\"News #3\"></menu-item>\n          </menu-section>\n          <menu-section title=\"Caribbean\">\n            <menu-item title=\"News #7\"></menu-item>\n            <menu-item title=\"News #8\"></menu-item>\n            <menu-item title=\"News #9\"></menu-item>\n          </menu-section>\n          <menu-section title=\"Pacific\">\n            <menu-item title=\"News #7\"></menu-item>\n            <menu-item title=\"News #8\"></menu-item>\n            <menu-item title=\"News #9\"></menu-item>\n          </menu-section>\n        </yw-menu>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map