import {Routes, RouterModule} from '@angular/router';
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';

const routes: Routes = [
    {path: 'list', component: SiteListComponent},
    {path: 'add', component: AddSiteComponent},
    {path: 'edit/:id', component: EditSiteComponent},
    {path: 'delete/:id', component: DeleteSiteComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'}
];

export const routingModule = RouterModule.forRoot(routes);