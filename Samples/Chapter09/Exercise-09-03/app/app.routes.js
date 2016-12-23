"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./welcome/welcome.component');
var dive_log_component_1 = require('./logs/dive-log.component');
var sites_routes_1 = require('./sites/sites.routes');
var routes = [
    { path: 'divelogs', component: dive_log_component_1.DiveLogComponent },
    { path: '', pathMatch: 'full', component: welcome_component_1.WelcomeComponent }
].concat(sites_routes_1.sitesRoutes);
exports.routingModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map