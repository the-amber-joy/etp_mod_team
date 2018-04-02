import { Note } from "../shared/note.model";

export class Offender {
    id: number;
    firstName: string;
    lastName: string;
    score: number;
    dateAdded: Date;
    lastUpdated: Date;
    notes: Note[];
    banStatus: boolean

    // constructor(
    //     firstName: string,
    //     lastName: string,
    //     score: number,
    //     dateAdded: string,
    //     lastUpdated: string,
    //     notes: string,
    //     banStatus: boolean
    // ) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.score = score;
    //     this.dateAdded = dateAdded;
    //     this.lastUpdated = lastUpdated;
    //     this.notes = notes;
    //     this.banStatus = banStatus;
    // }
}