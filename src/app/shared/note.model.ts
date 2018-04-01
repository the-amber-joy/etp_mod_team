import { Person } from "../shared/person.model";

export class Note {
    note: string;
    dateAdded: Date;
    addedBy: Person;

    constructor(note: string, dateAdded: Date, addedBy: Person) {
        this.note = note;
        this.dateAdded = dateAdded;
        this.addedBy = addedBy;
    }
}
