import { Note } from '../shared/note.model';
import { Admin } from './admin.model';

export class Offender {
    _id?: number;
    name: string;
    nickName?: string;
    otherNames?: { altName: string }[];
    points: number;
    originalPoints?: number;
    fbLink?: string;
    watchStatus: string;
    isBanned: boolean;
    originalStatus?: boolean;
    notes: Note[];
    notesAdded = false;
    created: Date = new Date();
    updated: Date = new Date();
    createdBy: Admin;
    updatedBy: Admin;
    changesMade?: boolean;
    bannedBy?: Admin;
    dateBanned?: Date;
}
