import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Location} from './location';

const URL = 'http://unraveling-ng.azurewebsites.net/api/dive/location/';
const USER_ID = 'b3f15a1b-8d0e-4e80-8b96-c36e66547481';
const USER_SECRET = 'd6deac91eba6453bb6ad78c61e8052b616d2d830db20463ea6b4d8be918e29df6a0a4a1ebdab46eb9cdd6b7ab319QQQQ'

@Injectable()
export class LocationsApiService {
  private locations: Location[] = [];

  constructor(private http: Http) {
  }

  getLocations() {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.get(URL, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }
  
  getLocationById(id: number) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.get(URL + id, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }

  addLocation(location) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.post(URL, location, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }
    
  removeLocation(id) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.delete(URL + id, options).toPromise()
      .then()
      .catch(this.handleError)
  }
  
  updateLocation(location) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.put(URL, location, options).toPromise()
      .then()
      .catch(this.handleError)
  }

  private getHeaders() {
    return new Headers({
      'Authorization': `TenantSecret ${USER_ID},${USER_SECRET}` 
    });
  }

  private handleError(err) {
    let errMsg = (err.message) 
      ? err.message 
      : err.status ? `${err.status}: ${err.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);   
  }
}