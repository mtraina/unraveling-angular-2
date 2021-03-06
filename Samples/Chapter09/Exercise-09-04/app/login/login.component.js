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
var user_auth_service_1 = require('./user-auth.service');
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.inProgress = false;
    }
    LoginComponent.prototype.login = function (userName) {
        var _this = this;
        this.inProgress = true;
        this.authService.login(userName).then(function () {
            var redirectUrl = _this.authService.redirectUrl
                ? _this.authService.redirectUrl
                : '/';
            _this.router.navigate([redirectUrl]);
            _this.inProgress = false;
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.inProgress = true;
        this.authService.logout().then(function () {
            _this.inProgress = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login/login.template.html'
        }), 
        __metadata('design:paramtypes', [user_auth_service_1.UserAuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map