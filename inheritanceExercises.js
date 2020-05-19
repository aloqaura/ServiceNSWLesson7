/* 1 Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values */
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

/* 2  Create a method in person called getInfo that takes no parameters and returns information about the name and age of the person */
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getInfo() {
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// }
// console.log(new Person("Alex", "Burgess", 21));
// console.log(new Person("Alex", "Burgess", 21).getInfo)

/* 3  Create a class called Student that extends Person. Student should have a property called grades that should be an array of numbers that represent their mark out of 100 for a series of tests */
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getInfo() {
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// }    

// class Student extends Person {
//     constructor(grades) {
//         super.Person(firstName, lastName, age);
//         this.grades = grades;
//     }
// }

// let grades = [90, 24, 45, 67, 78];

/* 4 Create a method inside student that calculates their average grade */
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getInfo() {
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, age, grades) {
//         super (firstName, lastName, age);
//         this.grades = grades;
//     }

//     averageGrade() {
//         let sum = 0
//         for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i];
//         }
//         let avg = sum/this.grades.length;
//         return avg;
//     }
//     }

// let grades = [90, 24, 45, 67, 78];
// let grade = new Student("Alex", "Burgess", 21, grades);
// console.log(grade.grades);
// console.log(grade.averageGrade());

/* 5 Override the getInfo method for Student so that it also displays the average grade of the student. Make sure to include a call to super.getInfo */
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getInfo() {
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, age, grades) {
//         super (firstName, lastName, age);
//         this.grades = grades;
//     }

//     averageGrade() {
//         let sum = 0
//         for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i];
//         }
//         let avg = sum/this.grades.length;
//         return avg;
//     }
//     getInfo() {
//         return super.getInfo() + ` and their average grade is ${this.averageGrade()}`;
//     }
//     }

// let grades = [90, 24, 45, 67, 78];
// let grade = new Student("Alex", "Burgess", 21, grades);
// console.log(grade.grades);
// console.log(grade.averageGrade());
// console.log(grade.getInfo())

/* 6 Create a class called Teacher that extends Person. Teacher should have a property called students that should be an array of Student objects representing the students in their class */
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getInfo() {
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, age, grades) {
//         super (firstName, lastName, age);
//         this.grades = grades;
//     }

//     averageGrade() {
//         let sum = 0
//         for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i];
//         }
//         let avg = sum/this.grades.length;
//         return avg;
//     }
//     getInfo() {
//         return super.getInfo() + ` and their average grade is ${this.averageGrade()}`;
//     }
//     }

// let grades = [90, 24, 45, 67, 78];
// let grade = new Student("Alex", "Burgess", 21, grades);

// class Teacher extends Person {
//     constructor (firstName, lastName, age, students) {
//         super.Person(firstName, lastName, age);
//         this.students = students
//     }
// }
// let myTeacher = new Teacher("Alex","Burgess", 21, [
//     new Student("John", "loyd", 56, [40, 67, 29, 90]),
//     new Student("Parker", "Peter", 23, [90, 24, 45, 67, 78]),
//     new Student("Joey", "Salvador".anchor, 29, [90, 91, 70, 99]),
// ]);

/* 7 Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number. */
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} ${this.age}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grades) {
        super (firstName, lastName, age);
        this.grades = grades;
    }

    averageGrade() {
        let sum = 0
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        let avg = sum/this.grades.length;
        return avg;
    }
    getInfo() {
        return super.getInfo() + ` and their average grade is ${this.averageGrade()}`;
    }
    }

let grades = [90, 24, 45, 67, 78];
let grade = new Student("Alex", "Burgess", 21, grades);

class Teacher extends Person {
    constructor (firstName, lastName, age, students) {
        super(firstName, lastName, age);
        this.students = students
    }
    averageStudentGrade() {
        let sum = 0
        for (let i = 0; i < this.students.length; i++) {
            sum += this.students[i];
        }
        let avg = sum/this.students.length;
        return avg;
    }
    getInfo() {
        return super.getInfo() + ` and their average grade is ${this.averageStudentGrade()}`;

}
};

let myTeacher = new Teacher("Alex","Burgess", 21, [
    new Student("John", "loyd", 56, [40, 67, 29, 90]),
    new Student("Parker", "Peter", 23, [90, 24, 45, 67, 78]),
    new Student("Joey", "Salvador", 29, [90, 91, 70, 99])]);

console.log(myTeacher);
console.log(myTeacher.getInfo())

/* 8 Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call to super.getInfo */

