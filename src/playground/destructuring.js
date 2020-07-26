/// Object destructuring

// const person = {
//     name :'Damien',
//     age: 39,
//     location:{ 
//         city:'Holywood',
//         temp: 58
//     }
// }

// const {name = "Anonymous", age} = person;

// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(temperature && city) {
// console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        name: 'Penguin'
//     }
// }

// const {name: publisherName='Self-Published'} = book.publisher;

// console.log(publisherName);


// Array destructuring


const address = ['105 Abbey Ring', 'Holywood', 'Co. Down', 'BT189NU'];

const [, city = "someTown", county ] = address;

console.log(`You are in ${city}, ${county}`)


const item = ['coffee (Hot)', '£2', '£2.50','£2.75'];
const [drink, small, medium, large] = item;

console.log(`A medium ${drink} costs ${medium}`)
