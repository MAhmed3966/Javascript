// ------------- New Keywords  ----------------

function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}

// const car = new Car('Honda', '2022', 'Silver')

// console.log(car.model)
// console.log(car.make)
// console.log(car.color)

// when a function is called with a new keyword
// following things are done for

/* 
    1. Plain and blank JS object is created
    2. 

*/

//  Oject prototype properties

// const myObject  = {
//     city : "lahore",
//     greet() {
//         return `i live in ${this.city}`
//     }
// }

// console.log(Object.getPrototypeOf(myObject))

function Car() {}
const car1 = new Car();
const car2 = new Car();
// before initializing the prototype property 
// car1.color = 'black';
// console.log(car1.color);
// console.log(car2.color);

// After initializing the prototype property 
// Keep in note that we are adding color property to  main Car prototype 

// Car.prototype.color = 'Define Your color';

// console.log(car1.color)
// console.log(car2.color)


function Student(name){
    if(!new.target){
        return `My name is: ${name}`
    }
    this.name = name
}

  const std = Student('Ahmed')
  const std1 = new Student('Ahmed')
  console.log(std)
  console.log(`My second name is ${std1.name}`)