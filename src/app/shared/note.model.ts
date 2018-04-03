import { Admin } from "../shared/admin.model";

export class Note {
    comment: string;
    dateAdded: Date;
    addedBy: Admin;

    constructor(comment: string, dateAdded: Date, addedBy: Admin) {
        this.comment = comment;
        this.dateAdded = dateAdded;
        this.addedBy = addedBy;
    }
}
