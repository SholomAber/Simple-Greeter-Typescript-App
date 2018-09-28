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
var user = new Student("Sholom", "D.", "Aber", "Developer");
document.body.innerHTML = greeter(user);
