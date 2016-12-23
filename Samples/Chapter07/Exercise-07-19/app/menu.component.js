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
var core_2 = require('@angular/core');
var menu_section_directive_1 = require('./menu-section.directive');
var MenuComponent = (function () {
    function MenuComponent() {
        this.useDefaultColor = true;
        this.selectedTitle = "none";
    }
    MenuComponent.prototype.selectSection = function (section) {
        this.sections.toArray().forEach(function (s) { return s.active = false; });
        section.active = true;
    };
    MenuComponent.prototype.selectItem = function (item) {
        this.selectedTitle = item.title;
    };
    MenuComponent.prototype.ngOnChanges = function () {
        this.log('OnChanges');
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.log('OnInit');
    };
    MenuComponent.prototype.ngDoCheck = function () {
        this.log('DoCheck');
    };
    MenuComponent.prototype.ngAfterContentInit = function () {
        this.log('AfterContentInit');
        if (this.sections.length > 0) {
            var activeSection = this.sections.filter(function (s) { return s.active; });
            if (activeSection.length == 0) {
                this.sections.first.active = true;
            }
            else {
                activeSection[0].active = true;
            }
        }
    };
    MenuComponent.prototype.ngAfterContentChecked = function () {
        this.log('AfterContentChecked');
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        this.log('AfterViewInit');
    };
    MenuComponent.prototype.ngAfterViewChecked = function () {
        this.log('AfterViewChecked');
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.log('OnDestroy');
    };
    MenuComponent.prototype.log = function (message) {
        console.log(++MenuComponent.count + ": " + message);
    };
    MenuComponent.count = 0;
    __decorate([
        core_2.ContentChildren(menu_section_directive_1.MenuSectionDirective), 
        __metadata('design:type', core_2.QueryList)
    ], MenuComponent.prototype, "sections", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'yw-menu',
            templateUrl: 'app/menu.template.html',
            styleUrls: ['app/menu.css'],
            inputs: ['useDefaultColor']
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map