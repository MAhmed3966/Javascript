const person = [{
  name: "Ahmed",
  age: 25,
  subjects: ["Computer", "ICT"],
},
{
    name: "Ahmed",
    age: 25,
    subjects: ["Computer", "ICT"],
  },
  {
    name: "Ahmed",
    age: 25,
    subjects: ["Computer", "ICT"],
  }];

//Before deleting
// console.log(person)
// delete person.subjects

// //After Deleting
// console.log(person)

// Assigning new properties
// person.hobby = "movies";
// person.profession = "Software Engineer";
// person["hobby2"] = "Singing";

// console.log(person)

// for (key in person) {
//   // console.log(`keys are: ${key} ${typeof key}`)
//   //    console.log(person.key undefined as we are passing the string with dot notation for
//   //    which is invalid for dot notation for Objects
//   console.log(person[key]);
// }

// console.log(typeof person)
// Object.keys(person).forEach(keys => {
//     console.log(`keys are : ${keys}`)
//     console.log(person[keys])
// })  

var vacationSpots = ['Tokyo', 'Bali', 'Mexico City', 'Vancouver'];

for(keys in vacationSpots){
    // console.log(`value of arrays are: ${vacationSpots[keys]}`)
}

// for(var items of vacationSpots){
    // console.log(`value of arrays are: ${items}`)
// }s

vacationSpots.forEach(function(items){
    console.log(`value of arrays are: ${items}`)
})