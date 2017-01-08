import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';
import {SiteManagementService} from './site-management.service';

@Component({
    selector: 'edit-site-view',
    templateUrl: 'app/edit-site.template.html'
})
export class EditSiteComponent {
    private _siteId: number;
    @Output() onClosed = new EventEmitter();
    siteName: string;

    constructor(private siteService: SiteManagementService){}

    @Input() set siteId(id: number){
        this._siteId = id;
        this.siteName = this.siteService.getSiteById(id).name;
    }

    save(){
        this.siteService.saveSite({id: this._siteId, name: this.siteName});
        this.onClosed.emit(null);
    }

    cancel(){
        this.onClosed.emit(null);
    }
}