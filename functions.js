/*
Arguments may be passed by value (in the case of primitive values) or 
by reference (in the case of objects). This means that if a function reassigns 
a primitive type parameter, the value won't change outside the function. */


// let name = "Ahmed";

// const  printName = (name)=> {
//     name = "Asad"
//     console.log('name is'+name)
// }
// printName()

// console.log({name})


// but it will change that in case of an object 


const carBrand = {
    name:'Mercedes',
    model:'S-Class',
    year:'2018'
}

const ObjectChange = (carBrand) =>{
    carBrand.name ="Rolls Royce";
    carBrand.model = 'Modern';
}
ObjectChange(carBrand)
console.log(carBrand.name)
console.log(carBrand.model)
