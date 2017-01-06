import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
    selector: 'edit-site-view',
    templateUrl: 'app/edit-site.template.html'
})
export class EditSiteComponent {
    @Input() site: DiveSite;
    @Output() onSaved = new EventEmitter<DiveSite>();
    @Output() onCancel = new EventEmitter();

    saved(){
        if(this.site.id){
            this.onSaved.emit(this.site);
        }
    }

    cancel(){
        this.onCancel.emit(null);
    }
}