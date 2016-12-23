import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'contentFilter'})
export class ContentFilterPipe implements PipeTransform {
  transform(value: any[], searchFor: string) : any[] {
    if (!searchFor) return value;
    searchFor = searchFor.toLowerCase();
    return value.filter(dive => 
      dive.site.toLowerCase().indexOf(searchFor) >= 0 ||
      dive.location.toLowerCase().indexOf(searchFor) >= 0 ||
      dive.depth.toString().indexOf(searchFor) >= 0 ||
      dive.time.toString().indexOf(searchFor) >= 0);
  }
}
