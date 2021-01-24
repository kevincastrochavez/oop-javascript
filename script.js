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

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

// Set the method to the prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Objects created from the constructor function inherit the calcAge method
jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log('Prototype of Jonas:', jonas.__proto__);
console.log(Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

// Object.prototype
console.log(jonas.__proto__.__proto__);
// null
console.log(jonas.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 4, 5, 1, 2, 1, 2, 1, 2]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
