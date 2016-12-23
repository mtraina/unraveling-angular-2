"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./welcome/welcome.component');
var dive_log_component_1 = require('./logs/dive-log.component');
var logged_in_guard_1 = require('./logged-in.guard');
var user_auth_service_1 = require('./login/user-auth.service');
var login_component_1 = require('./login/login.component');
var deactivable_guard_1 = require('./deactivable.guard');
var routes = [
    { path: 'divelogs', component: dive_log_component_1.DiveLogComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'sites',
        loadChildren: 'app/sites/sites.module#SitesModule' },
    { path: '', pathMatch: 'full', component: welcome_component_1.WelcomeComponent },
];
exports.routingProviders = [
    logged_in_guard_1.LoggedInGuard,
    user_auth_service_1.UserAuthService,
    deactivable_guard_1.CanDeactivateGuard
];
exports.routingModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map