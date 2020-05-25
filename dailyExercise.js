/* Update the Person class to have a property called id.

Create a static method in the Person class that takes 1 argument which should be an integer number and returns an array of randomly generated people with length equal to the number given. 
The ids of the owners should all be unique. You can use this gist to generate random names: https://gist.github.com/LukeParkerTAFE/161fd0d451f7236dae99fbb30573735d*/

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    getInfo() {
        return `${this.firstName} ${this.lastName}`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for(let i = 0; i < numberOfPeople; i++) {
            let ramdomPerson;
            let randomPerson = new Person (getRandomGivenName(), getRandomFamilyName(), 34, i)
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}


class Teacher extends Person {
    constructor (firstName, lastName, age, students) {
        super(firstName, lastName, age);
        this.students = students
    }
};

class Student extends Person {
    constructor(firstName, lastName, age, grades) {
        super (firstName, lastName, age);
        this.grades = grades;
    }
};

const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}

console.log(Person.generateRandomPeople(100));

/* Extra daily challenge extend the Person class to the children so that the override depicts random grades and random children. */

