export class Person {
    firstName: string;
    lastName: string;
    nickName: string;
    isAdmin: boolean;

    constructor(firstName: string, lastName: string, nickName: string, isAdmin: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.isAdmin = isAdmin;
    }
}