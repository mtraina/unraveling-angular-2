import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'add-site-view',
    templateUrl: 'app/add-site.template.html'
})
export class AddSiteComponent {
    @Output() onAdded = new EventEmitter();
    @Output() onCancel = new EventEmitter();

    added(){
        this.onAdded.emit(null);
    }

    cancel(){
        this.onCancel.emit(null);
    }
}