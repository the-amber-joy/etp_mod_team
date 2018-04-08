import { Admin } from "../shared/admin.model";

export class Note {
    note: string;
    created: Date = new Date();
    addedBy: Admin;
    constructor(note, addedBy) {
        this.note = note;
        this.addedBy = addedBy
    }
}
