// 03-arrays/03-reduce.ts

const num = [1, 2, 3, 4, 5];

const words = ["hi" , "hello" , "beautiful" , "amazing"];

const people = [ 
    {name : "Saman" , age: 19},
    {name : "Kumara" , age: 22},
    {name : "Wimal" , age: 25 }
]

type Employee = {
    name: string;
    age: number;
    department: string;
    salary: number;
};

const employees: Employee[] = [
    {
        name: "Ravi",
        age: 25,
        department: "IT",
        salary: 100000
    },
    {
        name: "Saman",
        age: 30,
        department: "HR",
        salary: 80000
    },
    {
        name: "Nadeesha",
        age: 28,
        department: "IT",
        salary: 120000
    }
];


// =============================================
// BEGINNER LEVEL
// =============================================


// 01. Calculate the sum of all numbers using reduce()
// Expected output: 15
//
// Hint:
// Initial accumulator = 0
//
// Write your code below:

const sum = num.reduce((accumulator, n) => {
        return accumulator + n
    },0 )
 
console.log(sum);

// 02. Calculate the product of all numbers using reduce() 
// 
// Product means multiplying all the numbers together. 
// 
// Expected output: 120 
// 
// 
// Hint: 
// 
// Initial accumulator = 1 
// 
// 
// Write your code below:

const product = num.reduce((accumulator,n) => {
    return accumulator * n 
},1)

console.log(product);


// 03. Count how many numbers are greater than 
// 2. // Do NOT use filter() or length. 
// 
// Expected output: 3 // 
// 
// Hint: 
// 
// Your accumulator should keep track of a count. 
// // 
// 
// Write your code below:

const greaterThan3 = num.reduce((accumulator,n) => {
    if(2 < n){
        ++accumulator
    }
    
    return accumulator
},0) ;

console.log(greaterThan3);

// 04. Calculate the total number of characters in all words. 
// 
// Do NOT use map() or filter(). 
// 
// Expected output: 23 
// 
// 
// 
// Hint: 
// 
// "hi" contributes 2 characters. 
// 
// "hello" contributes 5 characters. 
// 
// Add the length of every word. 
// 
//
// Write your code below:

const sumOfWords = words.reduce((accumulator,n) => {
    return accumulator + n.length;
},0);

console.log(sumOfWords);


// ============================================= // OBJECT PRACTICE // ============================================= 
// 
// 05. Calculate the total age of all people. 
// 
// Expected output: 66 
// 
// 
// 
// Hint: 
// 
// Each person has two attributes: name and age. 
// 
// You only need the age attribute. 
// 
// 
// 
// Write your code below:

let sumOfAge = people.reduce((accumulator,n) => {
    return accumulator + n.age
},0);

console.log(sumOfAge);


// 06. Create an object that stores each person's name as the key // and their age as the value. 
// // 
// 
// Expected output: 
// 
// 
// 
// { // Saman: 19, // Kumara: 22, // Wimal: 25 // } 
// 
//
// 
// Hint: 
// 
// Initial accumulator = an empty object. 
// 
// Use the person's name as the key. 
// 
// Use the person's age as the value. 
// 
// 
// 
// Write your code below:

let names = people.reduce((accumulator , n ) => {
    accumulator[n.name] = n.age;
    return accumulator
},{} as Record<string,number>)

console.log(names);



// ============================================= // INTERMEDIATE LEVEL // ============================================= 
// 
// 07. Create an object containing each employee's COMPLETE details. 
// 
// Each employee object has FOUR attributes: 
// 
// name, age, department, and salary. // 
// 
// Use the employee's name as the key. // 
// 
// Expected output: //
//  
// { // Ravi: { // name: "Ravi", // age: 25, // department: "IT", // salary: 100000 // }, // 
// 
// Saman: { // name: "Saman", // age: 30, // department: "HR", // salary: 80000 // }, // 
// 
// Nadeesha: { // name: "Nadeesha", // age: 28, // department: "IT", // salary: 120000 // } // } 
// 
// // Hint: 
// 
// Your accumulator should be an object. 
// 
// Each key should point to an employee object. 
// 
// 
// 
// Write your code below:

let workers = employees.reduce((accumulator,n) => {
        accumulator[n.name] = {
        name: n.name , 
        age: n.age , 
        department: n.department ,
        salary: n.salary};

        return accumulator

},{} as Record<string,{
    name: string,
    age: number,
    department: string,
    salary: number
}>);

console.log(workers);