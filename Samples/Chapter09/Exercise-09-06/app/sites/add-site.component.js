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
var router_1 = require('@angular/router');
var site_management_service_1 = require('./site-management.service');
var AddSiteComponent = (function () {
    function AddSiteComponent(siteService, route, router) {
        var _this = this;
        this.siteService = siteService;
        this.route = route;
        this.router = router;
        this.siteName = '';
        this.origSiteName = '';
        this.allowLeave = function () { return _this.siteName == _this.origSiteName; };
        this.confirmText = function () { return null; };
    }
    AddSiteComponent.prototype.cancel = function () {
        this.router.navigate(['..'], { relativeTo: this.route });
    };
    AddSiteComponent.prototype.add = function () {
        this.siteService.addSite({ id: 0, name: this.siteName });
        this.origSiteName = this.siteName;
        this.router.navigate(['..'], { relativeTo: this.route });
    };
    AddSiteComponent = __decorate([
        core_1.Component({
            selector: 'add-site-view',
            templateUrl: 'app/sites/add-site.template.html'
        }), 
        __metadata('design:paramtypes', [site_management_service_1.SiteManagementService, router_1.ActivatedRoute, router_1.Router])
    ], AddSiteComponent);
    return AddSiteComponent;
}());
exports.AddSiteComponent = AddSiteComponent;
//# sourceMappingURL=add-site.component.js.map