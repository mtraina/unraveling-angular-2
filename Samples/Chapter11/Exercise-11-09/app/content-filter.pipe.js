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
var ContentFilterPipe = (function () {
    function ContentFilterPipe() {
    }
    ContentFilterPipe.prototype.transform = function (value, searchFor) {
        if (!searchFor)
            return value;
        searchFor = searchFor.toLowerCase();
        return value.filter(function (dive) {
            return dive.site.toLowerCase().indexOf(searchFor) >= 0 ||
                dive.location.toLowerCase().indexOf(searchFor) >= 0 ||
                dive.depth.toString().indexOf(searchFor) >= 0 ||
                dive.time.toString().indexOf(searchFor) >= 0;
        });
    };
    ContentFilterPipe = __decorate([
        core_1.Pipe({ name: 'contentFilter' }), 
        __metadata('design:paramtypes', [])
    ], ContentFilterPipe);
    return ContentFilterPipe;
}());
exports.ContentFilterPipe = ContentFilterPipe;
//# sourceMappingURL=content-filter.pipe.js.map