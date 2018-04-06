import { Admin } from "../shared/admin.model";

export class Note {
    note: string;
    dateAdded: Date;
    addedBy: Admin;

    constructor(note: string, dateAdded: Date, addedBy: Admin) {
        this.note = note;
        this.dateAdded = dateAdded;
        this.addedBy = addedBy;
    }
}
