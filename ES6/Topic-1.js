// Difference B/w LET CONST and VAR

// 1 . Scope let vs car

const consollerFunction = (string, variable) => {
  console.log(`${string} is ${variable}`);
};

const nameFunc = () => {
  var name = "Hala Gul";
  //   console.log(`name is ${name}`);
};

const namesFunc = () => {
  let names = "Hala Gul";

  //   console.log(`name is ${names}`);
};

nameFunc();
namesFunc();

// console.log("name", name);
// console.log("name", names);

// 2. Re declaration and update
// LET Explanation
let cars = 10;

// const updateOwnedCars = () => {
//   cars = 20;
//   consollerFunction("cars", cars);
// };

// updateOwnedCars();
// consollerFunction("New cars", cars);

// const reDeclareOwnedCars = () => {
//   let cars = 20;
//   consollerFunction("New cars", cars);
// };
// reDeclareOwnedCars();
// consollerFunction("Original cars", cars);

//   VAR Explanation
var ownedCars = 10;

const updateOwnedCar = () => {
    var car = 20;
    consollerFunction("New cars", car);
};
updateOwnedCar();
consollerFunction("New cars", car);




