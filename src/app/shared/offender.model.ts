import { Note } from "../shared/note.model";
import { Admin } from "./admin.model";

export class Offender {
    _id: number;
    name: string;
    nickName?: string;
    otherNames?: { altName: string }[];
    points: number;
    originalPoints?: number;
    isBanned: boolean;
    originalStatus?: boolean;
    addedBy: Admin;
    notes: Note[];
    notesAdded: boolean = false;
    created: Date = new Date();
    updated: Date = new Date();
    changesMade?: boolean;
}