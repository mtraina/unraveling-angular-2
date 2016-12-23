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
var user_auth_service_1 = require('../login/user-auth.service');
var SiteListComponent = (function () {
    function SiteListComponent(authService, siteService, router) {
        this.authService = authService;
        this.siteService = siteService;
        this.router = router;
        this.sites = siteService.getAllSites();
    }
    SiteListComponent = __decorate([
        core_1.Component({
            selector: 'site-list-view',
            templateUrl: 'app/sites/site-list.template.html',
            styleUrls: ['app/sites/site-list.styles.css']
        }), 
        __metadata('design:paramtypes', [user_auth_service_1.UserAuthService, site_management_service_1.SiteManagementService, router_1.Router])
    ], SiteListComponent);
    return SiteListComponent;
}());
exports.SiteListComponent = SiteListComponent;
//# sourceMappingURL=site-list.component.js.map