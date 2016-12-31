import {Component} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html'
})
export class SiteListComponent {
  sites = DiveSite.FavoriteSites;
}