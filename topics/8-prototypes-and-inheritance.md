
# Prototypes and Inheritance

## Overview
Prototypes are the mechanism by which JavaScript objects inherit features from one another.

## Why Use Prototypes?
- Share methods and properties across objects
- Memory efficiency

## Examples
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise.

// ES6 Class Inheritance
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}
const student = new Student("Alice");
student.greet(); // Hello, Alice
student.study(); // Alice is studying.
```

## Explanation
- Objects inherit from prototypes via the prototype chain.
- ES6 classes provide a cleaner syntax for inheritance.

## Further Reading
- [MDN Web Docs: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript Prototypes - W3Schools](https://www.w3schools.com/js/js_object_prototypes.asp)
