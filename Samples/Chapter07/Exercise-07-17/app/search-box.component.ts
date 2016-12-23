import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'search-box',
  template: `
    <input #input class="form-control input-lg"
      placeholder="Search"
      [value]=searchText
      (keyup)="searchText=input.value" />
  `,
  inputs: ['searchText']
})
export class SearchBoxComponent {
  searchText: string;
}