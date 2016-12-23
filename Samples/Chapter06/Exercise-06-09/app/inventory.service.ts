import {Injectable} from '@angular/core';

export interface InventoryContract {
  getItems(): void;
  hasItem(key: string): boolean;
  toggle(key: string, owner: string): void;
}

@Injectable()
export class InventoryService implements InventoryContract {
  private _items: { [key: string]: string } = {};
  private _defaultOwner: string;

  getItems() {
    return this._items;
  }

  hasItem(key: string): boolean {
    return !!this._items[key]
  }

  toggle(key: string, owner: string) {
    if (this._items[key]) {
      delete this._items[key];
    }
    else {
      this._items[key] = this._defaultOwner || owner;
    }
  }
}

@Injectable()
export class TracedInventoryService implements InventoryContract {
  private _items: { [key: string]: string } = {};
  private _defaultOwner: string;

  getItems() {
    return this._items;
  }

  hasItem(key: string): boolean {
    return !!this._items[key]
  }

  toggle(key: string, owner: string) {
    if (this._items[key]) {
      delete this._items[key];
      console.log(`Removed ==> ${key}: ${owner}`);
    }
    else {
      this._items[key] = this._defaultOwner || owner;
      console.log(`Added ==> ${key}: ${owner}`);
    }
  }
}