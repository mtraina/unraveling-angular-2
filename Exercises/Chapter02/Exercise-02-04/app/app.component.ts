import {Component} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'yw-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
    sites = DiveSite.FavoriteSites.slice(0);
    currentView = 'list';

    navigateTo(view: string){
        this.currentView = view;
    }
}