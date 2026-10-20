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