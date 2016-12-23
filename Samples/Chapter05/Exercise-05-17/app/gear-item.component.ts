import {Component, Input} from '@angular/core';
import {GearItem} from './gear-item';

@Component({
  selector: 'gear-item',
  template: `
    {{gear.id}} &mdash; {{gear.name}}
  `,
  inputs: ['gear']
})
export class GearItemComponent {
  gear: GearItem;
}