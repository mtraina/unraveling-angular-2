import {Component} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'yw-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  sites = DiveSite.FavoriteSites.slice(0);
  newSiteId: number;
  currentSite: DiveSite;
  currentView = 'list';

  navigateTo(view: string) {
    this.currentView = view;
  }

  startAdd() {
    this.newSiteId = this.sites.map(s => s.id)
      .reduce((p, c) => p < c ? c : p) + 1;
    this.navigateTo('add');
  }

  siteAdded(newSiteName: string) {
    this.sites.push({id: this.newSiteId, name:newSiteName});
    this.navigateTo('list');
  }

  startEdit(site: DiveSite) {
    this.currentSite = { id: site.id, name: site.name };
    this.navigateTo('edit');
  }

  siteSaved(site: DiveSite) {
    let oldSite = this.sites.filter(s => s.id == site.id)[0];
    if (oldSite) {
      oldSite.name = site.name;
    }
    this.navigateTo('list');
  }

  startDelete(site: DiveSite) {
    this.currentSite = site;
    this.navigateTo('delete');
  }

  siteDeleted() {
    var siteIndex = this.sites.indexOf(this.currentSite);
    if (siteIndex >= 0) {
      this.sites.splice(siteIndex, 1);
    }
    this.navigateTo('list');
  }
}