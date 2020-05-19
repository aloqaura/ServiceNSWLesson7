// Getters and Setters

// class person {
//     constructor(name, age, heightInMm) {
//         this.name = name;
//         this.age = age;
//         this.heightInMm = heightInMm;
//     } 

//     get heightInInches() {
//         return this.heightInMm / 25.4;
//     }
// }


// let me = new person("alex", 21, 1900);
// console.log(me);
// console.log(me.heightInInches);

class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

class Dog extends Pet {
    constructor(name, age, breed) {
        super(name, age, "Dog");
        this.breed = breed
    }
}

let myDog = new Pet("dog", 8, "Bark");
let myCat = new Dog("cat", 7, "Rawr", "Beagle");
console.log(myCat);
console.log(myDog);

let cat = new Dog("Loyd", 7, "Bark")