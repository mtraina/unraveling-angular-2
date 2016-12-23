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
var UserAuthService = (function () {
    function UserAuthService() {
        this.loggedInUser = null;
    }
    UserAuthService.prototype.login = function (userName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.loggedInUser = userName;
                resolve();
            }, 1000);
        });
    };
    UserAuthService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.loggedInUser = null;
                _this.redirectUrl = null;
                resolve();
            }, 200);
        });
    };
    UserAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserAuthService);
    return UserAuthService;
}());
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=user-auth.service.js.map