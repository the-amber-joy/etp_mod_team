import { Admin } from "./admin.model";

export class Note {
    note: string;
    created: Date = new Date();
    createdBy: Admin;
    isNew?: boolean = true; // only used client side

    constructor(note: string, createdBy: Admin) {
        this.note = note;
        this.createdBy = createdBy;
    };
}
