import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h1>Scuba Diving News</h1>
      <button class="btn btn-default"
        [disabled]="displayMenu"
        (click)="displayMenu=true">
        Show menu
      </button>
      <button class="btn btn-default"
        (click)="defaultColor=!defaultColor">
        Toggle color
      </button>
      <button class="btn btn-default"
        [disabled]="!displayMenu"
        (click)="displayMenu=false">
        Hide menu
      </button>
      <div [style.width.px]="200"
        [style.margin-top.px]="12">
        <yw-menu #menu *ngIf="displayMenu"
          [useDefaultColor]="defaultColor">
          <menu-section title="Red Sea">
            <menu-item title="News #1"></menu-item>
            <menu-item title="News #2"></menu-item>
            <menu-item title="News #3"></menu-item>
          </menu-section>
          <menu-section title="Caribbean">
            <menu-item title="News #7"></menu-item>
            <menu-item title="News #8"></menu-item>
            <menu-item title="News #9"></menu-item>
          </menu-section>
          <menu-section title="Pacific">
            <menu-item title="News #7"></menu-item>
            <menu-item title="News #8"></menu-item>
            <menu-item title="News #9"></menu-item>
          </menu-section>
        </yw-menu>
      </div>
    </div>
  `
})
export class AppComponent {
  displayMenu = false;
  defaultColor = true;
}