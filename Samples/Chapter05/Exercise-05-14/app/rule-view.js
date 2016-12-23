"use strict";
var RuleView = (function () {
    function RuleView(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
    }
    RuleView.prototype.create = function () {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    };
    RuleView.prototype.destroy = function () {
        this.viewContainerRef.clear();
    };
    return RuleView;
}());
exports.RuleView = RuleView;
//# sourceMappingURL=rule-view.js.map