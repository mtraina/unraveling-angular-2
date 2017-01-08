import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
    selector: 'delete-site-view',
    templateUrl: 'app/delete-site.template.html'
})
export class DeleteSiteComponent {
    @Input() site: DiveSite;
    @Output() onDeleted = new EventEmitter();
    @Output() onCancel = new EventEmitter();

    delete() {
        this.onDeleted.emit(null);
    }

    cancel(){
        this.onCancel.emit(null);
    }
}