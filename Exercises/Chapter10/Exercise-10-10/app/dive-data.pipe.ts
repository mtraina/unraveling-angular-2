import {Pipe, PipeTransform} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Pipe({name: 'diveData'})
export class DiveDataPipe implements PipeTransform {
    transform(dive: DiveLogEntry, separator: any = ' | '): string {
        if(dive && dive.depth && dive.time){
            return `${dive.depth} feet${separator}${dive.time} min`;
        }
        return '(no dive data)';
    }
}