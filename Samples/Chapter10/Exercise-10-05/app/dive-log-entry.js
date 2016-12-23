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
            extraPaid: 5
        },
        {
            site: 'Ponte Mahoon',
            location: 'Maehbourg, Mauritius',
            depth: 54,
            time: 38,
            extraPaid: 12.96
        },
        {
            site: 'Molnar Cave',
            location: 'Budapest, Hungary',
            depth: 98,
            time: 62,
            extraPaid: 0
        }];
    return DiveLogEntry;
}());
exports.DiveLogEntry = DiveLogEntry;
//# sourceMappingURL=dive-log-entry.js.map