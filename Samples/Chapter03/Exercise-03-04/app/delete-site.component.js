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
var dive_site_1 = require('./dive-site');
var DeleteSiteComponent = (function () {
    function DeleteSiteComponent() {
        this.onDeleted = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
    }
    DeleteSiteComponent.prototype.deleted = function () {
        this.onDeleted.emit(null);
    };
    DeleteSiteComponent.prototype.cancel = function () {
        this.onCancel.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dive_site_1.DiveSite)
    ], DeleteSiteComponent.prototype, "site", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DeleteSiteComponent.prototype, "onDeleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DeleteSiteComponent.prototype, "onCancel", void 0);
    DeleteSiteComponent = __decorate([
        core_1.Component({
            selector: 'delete-site-view',
            templateUrl: 'app/delete-site.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DeleteSiteComponent);
    return DeleteSiteComponent;
}());
exports.DeleteSiteComponent = DeleteSiteComponent;
//# sourceMappingURL=delete-site.component.js.map