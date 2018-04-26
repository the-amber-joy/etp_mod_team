import { Note } from "../shared/note.model";
import { Admin } from "./admin.model";

export class Offender {
    _id?: number;
    name: string;
    nickName?: string; // future feature
    otherNames?: { altName: string }[]; // future feature
    points: number;
    originalPoints?: number;
    watchStatus: string;
    isBanned: boolean;
    originalStatus?: boolean;
    addedBy: Admin;
    notes: Note[];
    notesAdded: boolean = false;
    created: Date = new Date();
    updated: Date = new Date();
    changesMade?: boolean;
}