export class Admin {
    _id?: string;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    displayName: string;
    created: Date = new Date();
}