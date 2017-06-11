import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface DeactivableComponent {
 allowLeave: () => boolean;
 confirmText: () => string;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<DeactivableComponent> {
  canDeactivate(component: DeactivableComponent) : boolean | Promise<boolean> {
    if (component.allowLeave()) return true;
    var text = component.confirmText() ||
      'Do you want to discard these changes?' 
    return new Promise<boolean>(resolve => {
      return resolve(window.confirm(text));
    });
  }
}