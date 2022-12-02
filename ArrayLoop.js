// // loop that i know :p

// let numbers = [1, 2, 3, 4, 5];

// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   break;
// }

// // let i = 0;
// // do {
// //   i += 1;
// //   console.log(i);
// // } while (i < 5);

// let jsonObject = {
//   problems: [
//     {
//       Diabetes: [
//         {
//           medications: [
//             {
//               medicationsClasses: [
//                 {
//                   className: [
//                     {
//                       associatedDrug: [
//                         {
//                           name: "asprin",
//                           dose: "",
//                           strength: "500 mg",
//                         },
//                       ],
//                       "associatedDrug#2": [
//                         {
//                           name: "somethingElse",
//                           dose: "",
//                           strength: "500 mg",
//                         },
//                       ],
//                     },
//                   ],
//                   className2: [
//                     {
//                       associatedDrug: [
//                         {
//                           name: "asprin",
//                           dose: "",
//                           strength: "500 mg",
//                         },
//                       ],
//                       "associatedDrug#2": [
//                         {
//                           name: "somethingElse",
//                           dose: "",
//                           strength: "500 mg",
//                         },
//                       ],
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//           labs: [
//             {
//               missing_field: "missing_value",
//             },
//           ],
//         },
//       ],
//       Asthma: [{}],
//     },
//   ],
// }

// Object.keys(jsonObject).forEach(key => {
//     console.log(key)
// })
let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "Blue",
    type: "station wagon",
    registration: new Date("2019-03-03"),
    capacity: 10,
  },
  {
    color: "Silver",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 2,
  },
  {
    color: "Black",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 50,
  },
];

//------------------  Find Method  ------------------
// returns first instance of match
// let newCars = cars.find(car => car.capacity > 5)
// console.log(newCars);

// ------------------  Filter Method ------------------
// Return
// let newCars = cars.filter((car) => car.capacity > 5);
// console.log(newCars);

// ------------------  Map ------------------
//   newCars = cars.map((car) => car.capacity*2)
//   console.log(newCars);

// ------------------  some ------------------
// newCars = cars.some((car) => car.capacity === 50)
// console.log(newCars);

// ------------------  every ------------------
// newCars = cars.every((car) => car.capacity === 50);
// console.log(newCars);

// ------------------  includes ------------------
// console.log([14, 10, 20, 4, 100].includes(14))

//[14, 10, 20, 4, 100]//
