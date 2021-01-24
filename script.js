'use strict';

// /////////////////
// // Constructor functions

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this in a construction function! Many copies
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();

// ///////////////////////////////////////
// // Prototypes
// console.log(Person.prototype);

// // Set the method to the prototype
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // Objects created from the constructor function inherit the calcAge method
// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log('Prototype of Jonas:', jonas.__proto__);
// console.log(Person.prototype);

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// ///////////////////////////////////////
// // Prototypal Inheritance on Built-In Objects

// // Object.prototype
// console.log(jonas.__proto__.__proto__);
// // null
// console.log(jonas.__proto__.__proto__.__proto__);

// const arr = [1, 2, 3, 4, 5, 1, 2, 1, 2, 1, 2]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
console.log(bmw);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(bmw);
};

Car.prototype.break = function () {
  this.speed -= 10;
  console.log(bmw);
};

// console.log(bmw.__proto__);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

bmw.break();
bmw.break();
bmw.break();
