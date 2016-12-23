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
var EditSiteComponent = (function () {
    function EditSiteComponent(siteService, route, router) {
        this.siteService = siteService;
        this.route = route;
        this.router = router;
        this.siteId = this.route.snapshot.params['id'];
        this.siteName = this.siteService
            .getSiteById(this.siteId).name;
    }
    EditSiteComponent.prototype.save = function () {
        this.siteService.saveSite({ id: this.siteId, name: this.siteName });
        this.router.navigate(['/list']);
    };
    EditSiteComponent = __decorate([
        core_1.Component({
            selector: 'edit-site-view',
            templateUrl: 'app/edit-site.template.html'
        }), 
        __metadata('design:paramtypes', [site_management_service_1.SiteManagementService, router_1.ActivatedRoute, router_1.Router])
    ], EditSiteComponent);
    return EditSiteComponent;
}());
exports.EditSiteComponent = EditSiteComponent;
//# sourceMappingURL=edit-site.component.js.map