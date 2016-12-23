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
var LongStringComponent = (function () {
    function LongStringComponent() {
        this.longString = 'Red Sea, Arabic Al-Baḥr Al-Aḥmar, narrow strip of '
            + 'water extending southeastward from Suez, Egypt, for about '
            + '1,200 miles (1,930 km) to the Bab el-Mandeb Strait, which '
            + 'connects with the Gulf of Aden and thence with the Arabian '
            + 'Sea. Geologically, the Gulfs of Suez and Aqaba (Elat) must '
            + 'be considered as the northern extension of the same structure. '
            + 'The sea separates the coasts of Egypt, Sudan, and Eritrea to '
            + 'the west from those of Saudi Arabia and Yemen to the east. Its '
            + 'maximum width is 190 miles, its greatest depth 9,974 feet '
            + '(3,040 metres), and its area approximately 174,000 square '
            + 'miles (450,000 square km). [Encyclopedia Britannica]';
        this.start = 0;
        this.end = 1000;
    }
    LongStringComponent.prototype.toValue = function (input, defValue) {
        var value = parseInt(input);
        if (isNaN(value)) {
            return defValue;
        }
        else {
            return value;
        }
    };
    LongStringComponent = __decorate([
        core_1.Component({
            selector: 'long-string',
            templateUrl: 'app/long-string.template.html',
            styles: ["\n    .longstring {\n      display: inline-block;\n      background: #e0e0e0;\n      border-radius: 4px;\n      margin: 4px;\n      padding: 4px 8px;\n      font-size: 1.5em;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], LongStringComponent);
    return LongStringComponent;
}());
exports.LongStringComponent = LongStringComponent;
//# sourceMappingURL=long-string.component.js.map