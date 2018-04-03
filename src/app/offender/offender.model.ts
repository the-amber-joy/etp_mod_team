import { Note } from "../shared/note.model";

export class Offender {
    id: number;
    firstName: string;
    lastName: string;
    score: number;
    dateAdded: Date;
    lastUpdated: Date;
    notes: Note[];
    banStatus: boolean;
}