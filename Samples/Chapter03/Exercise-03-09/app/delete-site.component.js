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
var site_management_service_1 = require('./site-management.service');
var DeleteSiteComponent = (function () {
    function DeleteSiteComponent(siteService) {
        this.siteService = siteService;
        this.onClosed = new core_1.EventEmitter();
    }
    DeleteSiteComponent.prototype.ngOnChanges = function () {
        this.siteName = this.siteService
            .getSiteById(this.siteId).name;
    };
    DeleteSiteComponent.prototype.delete = function () {
        this.siteService.deleteSite(this.siteId);
        this.onClosed.emit(null);
    };
    DeleteSiteComponent.prototype.cancel = function () {
        this.onClosed.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DeleteSiteComponent.prototype, "siteId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DeleteSiteComponent.prototype, "onClosed", void 0);
    DeleteSiteComponent = __decorate([
        core_1.Component({
            selector: 'delete-site-view',
            templateUrl: 'app/delete-site.template.html'
        }), 
        __metadata('design:paramtypes', [site_management_service_1.SiteManagementService])
    ], DeleteSiteComponent);
    return DeleteSiteComponent;
}());
exports.DeleteSiteComponent = DeleteSiteComponent;
//# sourceMappingURL=delete-site.component.js.map