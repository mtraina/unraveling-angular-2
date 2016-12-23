import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html',
  styles: [`
    .evenRow {
      background-color: #dddddd;
    }

    .topRow {
      border-top: 2px solid #808080;
    }

    .bottomRow {
      border-bottom: 2px solid #808080;
    }
  `]
})
export class SiteListComponent {
  @Input() sites;
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter<DiveSite>();
  @Output() onDelete = new EventEmitter<DiveSite>();

  add() {
    this.onAdd.emit(null);
  }

  edit(site: DiveSite) {
    this.onEdit.emit(site);
  }

  delete(site: DiveSite) {
    this.onDelete.emit(site);
  }
}