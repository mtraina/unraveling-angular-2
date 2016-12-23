import {Component} from '@angular/core';
import {Location} from './location';
import {LocationsApiService} from './locations-api.service'

@Component({
  selector: 'ywLocations',
  templateUrl: 'app/locations.template.html',
  styles: [`
    .oddRow {
      background-color: #dddddd;
    }

    .list-name {
      margin-top: 13px;
      margin-bottom: 14px;
    }

    .button-space {
      margin-top: 8px;
    }
  `]
})
export class LocationsComponent {
  isInAddMode : boolean;
  editMode : boolean;
  deleteMode : boolean;
  selectedId : number;
  rings: number[] = [];

  locations: Location[];
  locationName: string;
  errorMessage: string;

  constructor(private api: LocationsApiService) {
    this.locations = Location.StockLocations;
    this.reset();
    this.refresh();
  }

  reset() {
    this.isInAddMode = false;
    this.editMode = false;
    this.deleteMode = false;
    this.selectedId = -1
    this.errorMessage = null;
  }

  isLoading() {
    return this.isBusy(-2);
  }

  isBusy(id?: number) {
    return id
      ? this.rings.indexOf(id) >= 0
      : this.rings.length > 0;
  }

  isInReadMode(id: number) {
    return this.selectedId < 0 || this.selectedId != id;
  }

  isInEditMode(id) {
    return this.selectedId == id && this.editMode;
  }

  isInRemoveMode(id) {
    return this.selectedId == id && this.deleteMode;
  }

  startAdd() {
    this.reset();
    this.selectedId = -1;
    this.isInAddMode = true;
    this.locationName = '';
  }

  startEdit(id) {
    this.reset();
    this.selectedId = id;
    this.editMode = true;
    this.api.getLocationById(id)
      .then((data: Location) => {
        let item = data;
        this.locationName = item.displayName;
      });
  }

  startRemove(id) {
    this.reset();
    this.selectedId = id;
    this.deleteMode = true;
  }

  add() {
    this.useBackend(-1, () => 
      this.api.addLocation({
        id: 0,
        displayName: this.locationName
      }))
  }

  save() {
    this.useBackend(this.selectedId, () =>
      this.api.updateLocation({
          id: this.selectedId,
          displayName: this.locationName
      }))
  }

  remove(id) {
    this.useBackend(id, () => 
      this.api.removeLocation(id))
  }

  private busy(id) {
    if (this.isBusy(id)) {
      return;
    }
    this.rings.push(id);
  }
  
  private complete(id: number) {
    let idx = this.rings.indexOf(id);
    if (idx < 0) {
      return;
    }
    this.rings.splice(idx, 1);
  }

  private refresh() {
    this.busy(-2);
    this.api.getLocations()
      .then((locations: Location[]) => {
        this.locations = locations;
        this.complete(-2);
      })
      .catch(err => {
        this.errorMessage = err;
        this.complete(-2);
      });
    this.reset();
  }

  private useBackend(id: number, operation: () => Promise<any>) {
    this.busy(id);
    operation()
      .then(data => {
        this.refresh();
        this.complete(id);
      })
      .catch(err => {
        this.errorMessage = err;
        this.complete(id);
      });
  }
}