import { Note } from "../shared/note.model";
import { Admin } from "./admin.model";

export class Offender {
    _id?: number; // automatically assigned by Mongo
    name: string;
    nickName?: string; // future feature
    otherNames?: { altName: string }[]; // future feature
    points: number;
    originalPoints?: number; // only used client side
    isBanned: boolean;
    originalStatus?: boolean; // only used client side
    addedBy: Admin;
    notes: Note[];
    notesAdded: boolean = false;
    created: Date = new Date();
    updated: Date = new Date();
    changesMade?: boolean; // only used client side
}