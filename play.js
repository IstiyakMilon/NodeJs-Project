// const name = 'Max';
// let age = 29;
// const hasHobbies = true;
// age = 30;

// function summarizeUser(name, age, hasHobbies) {
//     return `User name is ${name}, age is ${age} and has hobbies: ${hasHobbies}`;
// }
//  const summarizeUser = (name, age, hasHobbies) => {
//     return `User name is ${name}, age is ${age} and has hobbies: ${hasHobbies}`;
// }

// const add = function (a, b) {
//     return a+b;
// }
// const add = (a, b) => a+b;
// const addOne = a => a+1;
// const addRandom = () => 1+2;

// console.log(add(2,3));

// console.log(addOne(3));

// console.log(addRandom());

// console.log(summarizeUser(name, age, hasHobbies));

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// person.greet();

// const hobbies = ['Sports', 'Cooking'];
// for(let hobby of hobbies) {
//     console.log(hobby);
// }

//Object Destructuring

// const printData = ({name, age}) => {
//     console.log(name, age);
// }

// printData(person);

// const { name, age } = person;
// console.log(name, age);

// Array Destrucring
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);