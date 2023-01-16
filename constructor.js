// {
// // class Shape {
// // //   constructor(name) {
// // //     this.name = name;
// // //   }

// //   explainShape() {
// //     // console.log(`shape name is ${this.name}`);
// //     console.log(...arguments);
// //   }
// // }

// // const shape = new Shape('Triangle');
// // shape.explainShape()

// // class ValidationError extends Error {
// //   printMessage() {
// //     console.log(`Error: ${this.message}`);
// //     return `Validation failed :-( (details: ${this.message})`;
// //   }
// // }

// // try {
// //   throw new ValidationError("This is the custom generated error");
// // } catch (e) {
// //   if (e instanceof ValidationError) {
// //     console.log(e.name);
// //     console.log(e.printMessage());
// //   } else {
// //     console.log('error is',e);
// //     throw error;
// //   }
// // }
// }

// class Polygon {
//   constructor(name) {
//     this.name = name;
//   }
//   Introduce = () => {
//     console.log(`My name is ${this.name}`);
//     return 1;
//   }
// }

// const poly1 = new Polygon("Ahmed");
// poly1.Introduce();

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.code = 42;
  }
  printCustomMesssages() {
    return `The Error is ${this.name} with the code ${this.code}`;
  }
}

try {
  throw new ValidationError("This is custom Error");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomMesssages());
  } else {
    console.log("Unknown Error", error);
    throw error;
  }
}
