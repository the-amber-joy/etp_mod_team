import { Note } from "../shared/note.model";
import { Admin } from "./admin.model";

export class Offender {
    name: String;
    nickName?: String;
    otherNames?: { altName: String }[];
    points: Number;
    originalPoints?: Number;
    isBanned: boolean = false;
    originalStatus?: boolean;
    addedBy: Admin;
    notes: Note[];
    notesAdded: boolean = false;
    created: Date = new Date();
    updated: Date = new Date();
    changesMade?: boolean;
}