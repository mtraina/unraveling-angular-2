import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {DiveLogEntry} from './dive-log-entry';

@Injectable()
export class DiveLogApi {
  private DIVE_LOG_API_URL = 
    'http://unraveling-ng.azurewebsites.net/api/backendtest/dives';

  constructor (private http: Http) {}

  getDives() {
    return this.http.get(this.DIVE_LOG_API_URL)
      .map(resp => resp.json() || [])
      .catch(err => {
        let errMsg = (err.message) 
          ? err.message 
          : err.status ? `${err.status}: ${err.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
      })
  }
}