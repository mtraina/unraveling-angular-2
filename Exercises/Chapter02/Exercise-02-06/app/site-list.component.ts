import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html'
})
export class SiteListComponent {
  @Input() sites: DiveSite[];
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter<DiveSite>();
  @Output() onDelete = new EventEmitter<DiveSite>();

  add(){
    this.onAdd.emit(null);
  }

  edit(site: DiveSite){
    this.onEdit.emit(site);
  }

  delete(site: DiveSite){
    this.onDelete.emit(site);
  }
}