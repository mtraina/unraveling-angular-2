import {Injectable, Optional} from '@angular/core';
import {AdvancedTraceService} from './trace.service';

@Injectable()
export class InventoryService {
  private _items: { [key: string]: string } = {};
  private _defaultOwner: string;

  constructor(@Optional() private tracer: AdvancedTraceService) { }

  getItems() {
    return this._items;
  }

  hasItem(key: string): boolean {
    return !!this._items[key]
  }

  toggle(key: string, owner: string) {
    if (this._items[key]) {
      delete this._items[key];
      if (this.tracer) {
        this.tracer.trace(`Removed ==> ${key}: ${owner}`);
      }
    }
    else {
      this._items[key] = this._defaultOwner || owner;
      if (this.tracer) {
        this.tracer.trace(`Added ==> ${key}: ${owner}`);
      }
    }
  }
}