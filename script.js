'use strict';

// /////////////////
// // Constructor functions

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this in a construction function! Many copies
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// // // 1. New {} is created
// // // 2. function is called, this = {}
// // // 3. {} linked to prototype
// // // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// // console.log(jonas instanceof Person);

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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const bmw = new Car('BMW', 120);
// console.log(bmw);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(bmw);
// };

// Car.prototype.break = function () {
//   this.speed -= 10;
//   console.log(bmw);
// };

// // console.log(bmw.__proto__);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();

// bmw.break();
// bmw.break();
// bmw.break();

// ///////////////////////////////////////
// // ES6 Classes

// // Class expression
// // const PersonCl = class {}

// // // Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizes
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();

// ///////////////////////////////////////
// // Setters and Getters (useful for data validation)
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// ///////////////////////////////////////
// // Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();
// console.log(sarah);

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   break() {
//     this.speed -= 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   set speedUS(currSpeed) {
//     return (this.speed = currSpeed * 1.6);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford);
// ford.accelerate();
// ford.accelerate();
// ford.break();

// ford.speedUS = 50;
// console.log(ford);

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Before adding any methods to Student, because it'll be empty
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
console.log(mike);
mike.calcAge();

console.log(mike.__proto__);
console.log((Student.prototype.constructor = Student));
console.log(mike);
