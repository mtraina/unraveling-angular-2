export interface DiveLogEntry {
    site: string;
    location: string;
    depth: number;
    time: number;
    isFavorite: boolean;
    special: string;
    comments?: string;
}