export class DiveLogEntry {
  site: string;
  location: string;
  depth: number;
  time: number;

  static StockDives: DiveLogEntry[] = [
  {
    site: 'Abu Gotta Ramada',
    location: 'Hurghada, Egypt',
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
  }];

  static ExtraDives: DiveLogEntry[] = [
  {
    site: 'Zenubia Wreck',
    location: 'Larnace, Cyprus',
    depth: 96,
    time: 38
  },
  {
    site: 'Elephant Rock',
    location: 'Similan, Thailand',
    depth: 38,
    time: 74
  },
  {
    site: 'Thistegorm Wreck',
    location: 'Ras Mohamed, Egypt',
    depth: 112,
    time: 38
  }];
}