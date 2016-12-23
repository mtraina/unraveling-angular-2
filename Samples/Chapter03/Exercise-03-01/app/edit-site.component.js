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
var EditSiteComponent = (function () {
    function EditSiteComponent() {
        this.onSaved = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
    }
    EditSiteComponent.prototype.saved = function () {
        if (this.site.id) {
            this.onSaved.emit(this.site);
        }
    };
    EditSiteComponent.prototype.cancel = function () {
        this.onCancel.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dive_site_1.DiveSite)
    ], EditSiteComponent.prototype, "site", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditSiteComponent.prototype, "onSaved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditSiteComponent.prototype, "onCancel", void 0);
    EditSiteComponent = __decorate([
        core_1.Component({
            selector: 'edit-site-view',
            templateUrl: 'app/edit-site.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EditSiteComponent);
    return EditSiteComponent;
}());
exports.EditSiteComponent = EditSiteComponent;
//# sourceMappingURL=edit-site.component.js.map