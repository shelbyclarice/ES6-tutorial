class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}


// Notes from Lessons

// Classes

// Refactor a car constructor into a class
// ES5
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

const car = new Car({ title: 'Focus' });
car.drive;
car;


// Using a class - this kind of code is not fun way to write
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

// This part of code not needed to know for course but how to pretty it up
Toyota.prototype = object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' })
toyota;


// ES6 Class - car.drive(); comes back vroom
class Car {
  drive() {
    return 'vroom';
  }
}

const car = new Car();
car.drive();


// ES6 Class - car; comes back {"title"."Toyota"} and car.drive(); comes back vroom
class Car {
  constructor(options) {
    this.title = options.title;
  }

  drive() {
    return 'vroom';
  }
}

const car = new Car({ title: 'Toyota' });
car;
car.drive();


// ES6 Class - car; comes back {"title".{"title"."Toyota"}} and car.drive(); comes back vroom
class Car {
  constructor(title) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

const car = new Car({ title: 'Toyota' });
car;
car.drive();


// Add in the Toyota Class now
class Car {
  constructor(title) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car{
  constructor( options ) {
    super(options); // Calls onto Car.constructor() - class toyota is a subclass of the class Car or the parent method
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
'----';
toyota.honk();
toyota.drive();
toyota;


// When we use classes - using React
React.createClass({
  doSomething() {

  },

  doSomethingElse() {

  }
});

class MyComponent extends Component {
  doSomething() {

  }

  doSomethingElse() {

  }
}
