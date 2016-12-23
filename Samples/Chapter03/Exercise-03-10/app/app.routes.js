"use strict";
var router_1 = require('@angular/router');
var site_list_component_1 = require('./site-list.component');
var add_site_component_1 = require('./add-site.component');
var edit_site_component_1 = require('./edit-site.component');
var delete_site_component_1 = require('./delete-site.component');
var routes = [
    { path: 'list', component: site_list_component_1.SiteListComponent },
    { path: 'add', component: add_site_component_1.AddSiteComponent },
    { path: 'edit/:id', component: edit_site_component_1.EditSiteComponent },
    { path: 'delete/:id', component: delete_site_component_1.DeleteSiteComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];
exports.routingModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map