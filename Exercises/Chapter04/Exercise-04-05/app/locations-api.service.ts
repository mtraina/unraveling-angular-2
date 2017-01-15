import {Injectable} from '@angular/core';
import {Location} from './location';

@Injectable()
export class LocationsApiService {
  private locations: Location[] = Location.StockLocations;

  getLocations() {
    return this.defer(100, () => this.locations.slice(0))
  }
  
  getLocationById(id: number) {
    return this.defer(10, () => {
      let itemId = this.getLocationIndexById(id);
        if (itemId >= 0) {
          return this.locations[itemId];
        } else {
          return null;
        }
    })
  }

  addLocation(location) {
    return this.defer(1000, () => {
      let newId = this.locations.length + 1;
      location.id = newId;
      this.locations.push(location);
    })
  }
    
  removeLocation(id) {
    return this.defer(1000, () => {
      let itemId = this.getLocationIndexById(id);
      if (itemId >= 0) {
        this.locations.splice(itemId, 1);
      }
    })
  }
  
  updateLocation(location) {
    return this.defer(1000, () => {
      let itemId = this.getLocationIndexById(location.id);
      if (itemId >= 0) {
        this.locations[itemId] = location;
      }
    })
  }

  private getLocationIndexById(id) {
    for (var i = 0; i < this.locations.length; i++) {
      if (this.locations[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  private defer(time: number, operation: () => any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = operation();
        resolve(result);
      }, time);
    })
  }
}