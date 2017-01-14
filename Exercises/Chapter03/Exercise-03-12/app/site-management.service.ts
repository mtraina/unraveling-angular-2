import {Injectable} from '@angular/core';
import {DiveSite} from './dive-site';

@Injectable()
export class SiteManagementService {
    private _sites = DiveSite.FavoriteSites.slice(0);

    getAllSites(): DiveSite[]{
        return this._sites.slice(0);
    }

    getSiteById(id: number): DiveSite {
        let site = this._sites.filter(s => s.id == id)[0];
        return site
            ? {id: site.id, name: site.name}
            : null;
    }

    addSite(newSite: DiveSite) {
        newSite.id = this._sites.map(s => s.id).reduce((p, c) => p < c ? c : p) + 1;
        this._sites.push(newSite);
    }

    saveSite(site: DiveSite){
        let oldSite = this._sites.filter(s => s.id == site.id)[0];
        if(oldSite){
            oldSite.name = site.name;
        }
    }

    deleteSite(id: number){
        let oldSite = this._sites.filter(s => s.id == id)[0];
        if(oldSite){
            let siteIndex = this._sites.indexOf(oldSite);
            if(siteIndex >= 0){
                this._sites.splice(siteIndex, 1);
            }
        }
    }
}