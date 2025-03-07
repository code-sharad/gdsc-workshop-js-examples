
function greet(){
    return 'hello, Guys'
}

greet();

function greet_with_name(name){
    return `hello, ${name}`
}

// const greet = (name) => `Hello, ${name}!`;
// const greet = (name) => {
//     return `Hello, ${name}`
// }

// console.log(greet('sharad'))
// greet_with_name('sharad')
// console.log(greet_with_name('sharad'))


const person = {
    name: "Sharad",
    age: 20,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Output: Sharad
console.log(person.age); // Output: 20
person.greet(); // Output: Hello, my name is Sharad
