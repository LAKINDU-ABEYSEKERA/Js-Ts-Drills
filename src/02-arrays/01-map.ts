// 02-arrays/01-map.ts
// Goal: understand Array.prototype.map
//
// Look up "Array.prototype.map" on MDN.
// Read the description, the syntax, and the "Examples" section.
// Then fill in the exercises below using map.

const numbers = [1, 2, 3, 4, 5];
const words = ["hi", "hello", "hey"];

const kvArray = [
    {key: 1,value:10},
    {key: 2,value:20},
    {key: 3,value:30}
]

const formatted = kvArray.map(
    ({key,value}) => ({[key]: value})
)

console.log(formatted);

// Exercise 1: use map to create an array of doubled numbers
// const doubled = ???
// console.log(doubled); // expected: [2, 4, 6, 8, 10]

const doubled = numbers.map((n) => (n*2));
console.log(doubled);

// Exercise 2: use map to create an array of word lengths
// const lengths = ???
// console.log(lengths); // expected: [2, 5, 3]

const wordlength = words.map((n) => (n.length));
console.log(wordlength);

// Exercise 3: use map to create an array of uppercased words
// Hint: look up String.prototype.toUpperCase
// const upper = ???
// console.log(upper); // expected: ["HI", "HELLO", "HEY"]

const upperword = words.map((n) => (n.toUpperCase()));
console.log(upperword);

// Exercise 4: use map to turn a list of numbers into strings like "#1", "#2", ...
// Hint: template literals
// const tagged = ???
// console.log(tagged); // expected: ["#1", "#2", "#3", "#4", "#5"]

const array = numbers.map((n) => (`#${n}`));
console.log(array);

// Exercise 5 (challenge): use map to turn numbers into objects
// const objs = numbers.map(...)
// expected: [{ value: 1 }, { value: 2 }, ...]

const createObject1 = numbers.map((n) => ({value: n}));

//alternative multi-statement form.
const createObject2 = numbers.map((n) => {
    return {
        value: n,
    }
})


console.log(createObject1);
console.log(createObject2);

//reversing the numbers array

const reverse = numbers.map((n)=> (5-n));
console.log(reverse);