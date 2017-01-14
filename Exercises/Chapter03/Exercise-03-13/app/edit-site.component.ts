import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {DiveSite} from './dive-site';
import {SiteManagementService} from './site-management.service';

@Component({
    selector: 'edit-site-view',
    templateUrl: 'app/edit-site.template.html'
})
export class EditSiteComponent {
    private _siteId: number;
    siteName: string;

    constructor(
        private siteService: SiteManagementService, 
        private router: Router,
        private route: ActivatedRoute
        ){
            this._siteId = this.route.snapshot.params['id'];
            this.siteName = this.siteService.getSiteById(this._siteId).name;
        }

    @Input() set siteId(id: number){
        this._siteId = id;
        this.siteName = this.siteService.getSiteById(id).name;
    }

    save(){
        this.siteService.saveSite({id: this._siteId, name: this.siteName});
        this.router.navigate(['/list']);
    }
}