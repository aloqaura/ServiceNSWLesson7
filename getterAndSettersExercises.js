/* 1 Create a class called Square with a single property, sideLength and create a constructor that assigns that value */
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength
//     }
// }
// console.log(new Square);

/* 2 Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength) */
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength
//     }

//     get area () {
//         return this.sideLength * this.sideLength
//     }
// }
// let sq = new Square(10);
// console.log(sq.area);
// console.log(new Square(10).area)

/* 3 Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength) */
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength
//     }

//     get area () {
//         return this.sideLength * this.sideLength
//     }
//     set area(value) {
//         this.sideLength = Math.sqrt(value)
//     }
// }

// let sq = new Square(12);
// console.log(sq.area);
// sq.area = 14;
// console.log(sq.area);
// console.log(sq.sideLength);