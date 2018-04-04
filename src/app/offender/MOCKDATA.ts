import { Offender } from "./offender.model";
import { Admin } from '../shared/admin.model';
import { Note } from '../shared/note.model';

export const MOCKDATA: Offender[] = buildMockOffenderList()

function buildMockOffenderList(): Offender[] {
    let offenders = [];
    for (let i = 0; i < 3; i++) {
        let offender = new Offender();
        offender.id = i + 1;
        offender.name = 'Offender ' + (i + 1).toString();
        offender.score = i + 5;
        offender.dateAdded = new Date("Oct 4 2017");
        offender.lastUpdated = new Date();
        offender.notes = [];
        offender.banStatus = false;
        let newNote0 = new Note("Previous notes would show up here.", new Date("Oct 4 2017"), new Admin("Patrick", "Umphrey", "CoachPotato"));
        let newNote1 = new Note("Here's another note you might see. It's a longer note with more stuff in it.The text just goes on and on and on.", new Date("Dec 19 2017"), new Admin("Susan", "Chambers", "DeadliftQueen"));
        let newNote2 = new Note("This guy has a history.", new Date("Jan 23 2018"), new Admin("Jer", "Chapman", "PieHater"));
        offender.notes.push(newNote0, newNote1, newNote2);
        offenders.push(offender);
    }
    return offenders;
}