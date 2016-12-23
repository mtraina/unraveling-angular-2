"use strict";
var DiveLogEntry = (function () {
    function DiveLogEntry() {
    }
    DiveLogEntry.StockDives = [
        {
            site: 'Abu Gotta Ramada',
            location: 'Hurghada, Egypt',
            depth: 72,
            time: 54,
            divedOn: new Date("9/27/2012 11:25")
        },
        {
            site: 'Ponte Mahoon',
            location: 'Maehbourg, Mauritius',
            depth: 54,
            time: 38,
            divedOn: new Date("01/18/2009")
        },
        {
            site: 'Molnar Cave',
            location: 'Budapest, Hungary',
            depth: 98,
            time: 62,
            divedOn: new Date("12/7/2008 00:00")
        }];
    return DiveLogEntry;
}());
exports.DiveLogEntry = DiveLogEntry;
//# sourceMappingURL=dive-log-entry.js.map