import { Note } from "../shared/note.model";

export class Offender {
    name: string;
    score: number;
    notes: Note[];
    banStatus: boolean;
    nickname?: string;
    dateAdded: Date;
    lastUpdated: Date;
}