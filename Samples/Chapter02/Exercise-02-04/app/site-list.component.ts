import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html'
})
export class SiteListComponent {
  @Input() sites;
  @Output() onAdd = new EventEmitter();

  add() {
    this.onAdd.emit(null);
  }
}