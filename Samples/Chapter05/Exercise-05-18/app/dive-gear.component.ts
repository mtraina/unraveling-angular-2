import {Component} from '@angular/core';
import {GearItem} from './gear-item';

@Component({
  selector: 'dive-gear',
  templateUrl: 'app/dive-gear.template.html',
  styles: [`
    .selected {
      color: white;
      background-color: navy;
    }
  `]
})
export class DiveGearComponent {
  gearItems: GearItem[] = [
    {id: 1, name: 'Technisub Look mask' },
    {id: 2, name: 'Cressy fins' },
    {id: 3, name: 'Aqualung TechSuit' },
    {id: 4, name: 'Oceanic Pro BCD' },
    {id: 5, name: 'Scubapro regulator' },
    {id: 6, name: 'Suunto D9 computer' },
    {id: 7, name: 'Coltrisub cylinder' },
  ]

  selected(ev: string) {
    console.log(ev);
  }
}