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

let user = new Student("Sholom", "D.", "Aber", "Developer")

document.body.innerHTML = greeter(user);