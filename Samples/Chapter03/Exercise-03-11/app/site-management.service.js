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
var SiteManagementService = (function () {
    function SiteManagementService() {
        this.sites = dive_site_1.DiveSite.FavoriteSites.slice(0);
    }
    SiteManagementService.prototype.getAllSites = function () {
        return this.sites.slice(0);
    };
    SiteManagementService.prototype.getSiteById = function (id) {
        var site = this.sites.filter(function (s) { return s.id == id; })[0];
        return site
            ? { id: site.id, name: site.name }
            : null;
    };
    SiteManagementService.prototype.addSite = function (newSite) {
        newSite.id = this.sites.map(function (s) { return s.id; })
            .reduce(function (p, c) { return p < c ? c : p; }) + 1;
        this.sites.push(newSite);
    };
    SiteManagementService.prototype.saveSite = function (site) {
        var oldSite = this.sites.filter(function (s) { return s.id == site.id; })[0];
        if (oldSite) {
            oldSite.name = site.name;
        }
    };
    SiteManagementService.prototype.deleteSite = function (id) {
        var oldSite = this.sites.filter(function (s) { return s.id == id; })[0];
        if (oldSite) {
            var siteIndex = this.sites.indexOf(oldSite);
            if (siteIndex >= 0) {
                this.sites.splice(siteIndex, 1);
            }
        }
    };
    SiteManagementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SiteManagementService);
    return SiteManagementService;
}());
exports.SiteManagementService = SiteManagementService;
//# sourceMappingURL=site-management.service.js.map