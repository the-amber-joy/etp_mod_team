import { Admin } from "../models/admin.model";

export class Note {
    note: string;
    created: Date = new Date();
    addedBy: Admin;
    isNew?: boolean = true; // only used client side

    constructor(note: string, addedBy: Admin) {
        this.note = note;
        this.addedBy = addedBy;
    };
}
