import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';
import {SiteManagementService} from './site-management.service';

@Component({
    selector: 'edit-site-view',
    templateUrl: 'app/edit-site.template.html'
})
export class EditSiteComponent {
    @Input() siteId: number;
    @Output() onClosed = new EventEmitter();
    siteName: string;

    constructor(private siteService: SiteManagementService){
        this.siteName = this.siteService.getSiteById(this.siteId).name;
    }

    save(site: DiveSite){
        this.siteService.saveSite(site);
        this.onClosed.emit(null);
    }

    cancel(){
        this.onClosed.emit(null);
    }
}