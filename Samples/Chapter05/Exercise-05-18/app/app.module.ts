import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveGearComponent} from './dive-gear.component';
import {GearItemComponent} from './gear-item.component';
import {SelectableDirective} from './selectable.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveGearComponent,
    GearItemComponent,
    SelectableDirective
  ],
  bootstrap: [DiveGearComponent]
})
export class AppModule { }