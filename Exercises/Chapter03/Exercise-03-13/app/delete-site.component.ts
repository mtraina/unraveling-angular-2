import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {DiveSite} from './dive-site';
import {SiteManagementService} from './site-management.service';

@Component({
    selector: 'delete-site-view',
    templateUrl: 'app/delete-site.template.html'
})
export class DeleteSiteComponent implements OnChanges{
    @Input() siteId: number;
    @Output() onClosed = new EventEmitter();
    siteName: string;

    constructor(private siteService: SiteManagementService){}

    ngOnChanges(){
        this.siteName = this.siteService.getSiteById(this.siteId).name;
    }

    delete() {
        this.siteService.deleteSite(this.siteId);
        this.onClosed.emit(null);
    }

    cancel(){
        this.onClosed.emit(null);
    }
}