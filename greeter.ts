class Student {
    fullName: string;
    occupation: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string, public job: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.occupation = job;
    }
}

function greeter(student : Student) {
    return student.firstName + " " + student.lastName + " is a " + student.occupation;
}

var personFirstName = prompt("Please enter your first name");
var personMiddleInitial = prompt("Please enter your middle initial");
var personLastName = prompt("Please enter your last name");
var personOccupation = prompt("Please enter your occupation");

let user = new Student(personFirstName, personMiddleInitial, personLastName, personOccupation)

document.body.innerHTML = greeter(user);