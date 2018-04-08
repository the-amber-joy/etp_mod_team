import { Note } from "../shared/note.model";
import { Admin } from "./admin.model";

export class Offender {
    name: string;
    nickName?: string;
    otherNames?: { altName: string }[];
    points: number;
    isBanned: boolean = false;
    addedBy: Admin;
    notes: Note[];
    created: Date = new Date();
    updated: Date = new Date();
}