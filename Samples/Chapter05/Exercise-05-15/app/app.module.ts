import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveGearComponent} from './dive-gear.component';
import {GearItemComponent} from './gear-item.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveGearComponent,
    GearItemComponent
  ],
  bootstrap: [DiveGearComponent]
})
export class AppModule { }