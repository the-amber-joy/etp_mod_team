// import { Offender } from "../shared/offender.model";
// import { Admin } from '../shared/admin.model';
// import { Note } from '../shared/note.model';

// export const MOCKDATA: Offender[] = buildMockOffenderList()

// function buildMockOffenderList(): Offender[] {
//     let offenders = [];
//     for (let i = 0; i < 3; i++) {
//         let offender = new Offender();
//         offender.name = 'Offender ' + (i + 1).toString();
//         offender.points = i + 5;
//         offender.created = new Date("Oct " + i + 4 + " 2017");
//         offender.updated = new Date();
//         offender.notes = [];
//         offender.isBanned = false;
//         let newNote0 = new Note("Initial adding to the list.", new Admin("Patrick", "Umphrey", "CoachPotato"));
//             newNote0.created = new Date("Oct " + i+4 + " 2017")
//         let newNote1 = new Note("Here's another note you might see. It's a longer note with more stuff in it.The text just goes on and on and on.", new Admin("Susan", "Chambers", "DeadliftQueen"));
//             newNote1.created = new Date("Dec " + i+19 + " 2017")
//         let newNote2 = new Note("This guy has a history.", new Admin("Jer", "Chapman", "PieHater"));
//             newNote2.created = new Date("Jan " + i+23 + " 2018");

//         offender.notes.push(newNote0, newNote1, newNote2);
//         offenders.push(offender);
//     }
//     return offenders;
// }