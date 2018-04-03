import { Note } from "../shared/note.model";

export class Offender {
    id: number;
    name: string;
    score: number;
    dateAdded: Date;
    lastUpdated: Date;
    notes: Note[];
    banStatus: boolean;
}