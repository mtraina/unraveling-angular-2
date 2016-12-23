import {Pipe, PipeTransform} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Pipe({name: 'contentFilter', pure: false})
export class ContentFilterPipe implements PipeTransform {
  transform(value: DiveLogEntry[], searchFor: string) : DiveLogEntry[] {
    if (!searchFor) return value;
    searchFor = searchFor.toLowerCase();
    return value.filter(dive => 
      dive.site.toLowerCase().indexOf(searchFor) >= 0 ||
      dive.location.toLowerCase().indexOf(searchFor) >= 0 ||
      dive.depth.toString().indexOf(searchFor) >= 0 ||
      dive.time.toString().indexOf(searchFor) >= 0);
  }
}
