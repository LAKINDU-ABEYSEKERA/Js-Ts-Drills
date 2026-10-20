export {}

// 02-arrays/02-filter.ts

const num = [1,2,3,4,5];
const words = ["hi" , "hello" , "beautiful" , "amazing"];
const people = [
    {name: "Saman", age: 19},
    {name: "Kumara", age:22},
    {name: "Wimal" , age: 25}
];

// 01 filter out odd numbers >>> expected : [2 , 4]

const evens = num.filter((n) => (n % 2 === 0));
console.log(evens);

// 02 only numbers > 2 >>> expected : [3 , 4 , 5]

const evenNum = num.filter((n) => (n > 2));
console.log(evenNum);

// 03 only words longer than length 4 >>> expected : [hello, beautiful , amazing]

const longWords = words.filter((n) => n.length > 4);
console.log(longWords);

// 04 only kumara >>> expected : [{kumara,22}]

const findKumara = people.filter((n) => (n.name.toLowerCase() === "kumara"));
console.log(findKumara);

// 05 only age > 20 >>> expected : [{ name: "Kumara", age: 22 }, { name: "Wimal", age: 25 }]

const biggerThan20 = people.filter((n) => (n.age > 20));
console.log(biggerThan20);

// 06 only age lower than 23 >>> expected : [{ name: 'Saman', age: 19 }, { name: 'Kumara', age: 22 }]

const lowerThan23 = people.filter((n) => (n.age < 23));
console.log(lowerThan23);