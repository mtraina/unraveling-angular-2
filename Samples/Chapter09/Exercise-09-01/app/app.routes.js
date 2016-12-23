"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./welcome/welcome.component');
var dive_log_component_1 = require('./logs/dive-log.component');
var site_list_component_1 = require('./sites/site-list.component');
var routes = [
    { path: 'divelogs', component: dive_log_component_1.DiveLogComponent },
    { path: 'sites', component: site_list_component_1.SiteListComponent },
    { path: '', pathMatch: 'full', component: welcome_component_1.WelcomeComponent }
];
exports.routingModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map