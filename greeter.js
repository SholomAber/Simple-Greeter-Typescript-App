var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, job) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.job = job;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.occupation = job;
    }
    return Student;
}());
function greeter(student) {
    return student.firstName + " " + student.lastName + " is a " + student.occupation;
}
var personFirstName = prompt("Please enter your first name");
var personMiddleInitial = prompt("Please enter your middle initial");
var personLastName = prompt("Please enter your last name");
var personOccupation = prompt("Please enter your occupation");
var user = new Student(personFirstName, personMiddleInitial, personLastName, personOccupation);
document.body.innerHTML = greeter(user);
