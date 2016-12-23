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
var platform_browser_1 = require('@angular/platform-browser');
var log_book_component_1 = require('./log-book.component');
var utility_module_1 = require('../sharedutil/utility.module');
var utility_module_2 = require('../acmeutils/utility.module');
var LogBookModule = (function () {
    function LogBookModule() {
    }
    LogBookModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                utility_module_1.UtilityModule,
                utility_module_2.UtilityModule
            ],
            declarations: [log_book_component_1.LogBookComponent],
            exports: [log_book_component_1.LogBookComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LogBookModule);
    return LogBookModule;
}());
exports.LogBookModule = LogBookModule;
//# sourceMappingURL=log-book.module.js.map