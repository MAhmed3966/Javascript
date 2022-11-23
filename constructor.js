// class Shape {
// //   constructor(name) {
// //     this.name = name;
// //   }

//   explainShape() {
//     // console.log(`shape name is ${this.name}`);
//     console.log(...arguments);
//   }
// }

// const shape = new Shape('Triangle');
// shape.explainShape()

// class ValidationError extends Error {
//   printMessage() {
//     console.log(`Error: ${this.message}`);
//     return `Validation failed :-( (details: ${this.message})`;
//   }
// }

// try {
//   throw new ValidationError("This is the custom generated error");
// } catch (e) {
//   if (e instanceof ValidationError) {
//     console.log(e.name);
//     console.log(e.printMessage());
//   } else {
//     console.log('error is',e);
//     throw error;
//   }
// }


