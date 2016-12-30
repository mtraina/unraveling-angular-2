import { Component } from '@angular/core';

@Component({
    selector: 'divelog',
    templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
    public dives = [];
    private _index = 0;
    private _stockDives = [
        {
            site: 'Abu Gotta Ramada',
            location: 'Hurgada, Egypt',
            depth: 72,
            time: 54
        },
        {
            site: 'Ponte Mahoon',
            location: 'Maehbourg, Mauritius',
            depth: 54,
            time: 38
        },
        {
            site: 'Molnar Cave',
            location: 'Budapest, Hungary',
            depth: 98,
            time: 62
        }
    ];

    public enableAdd(){
        return this._index < this._stockDives.length;
    }

    public addDive(){
        if(this.enableAdd()){
            this.dives.push(this._stockDives[this._index++]);
        }
    }

    public clearDives(){
        this.dives = [];
        this._index = 0;
    }
}