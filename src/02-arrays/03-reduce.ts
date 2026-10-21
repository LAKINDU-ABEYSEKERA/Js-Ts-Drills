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






// 08. Calculate the total salary of all employees. 
// 
// Expected output: 300000 
// 
// 
// // Hint: 
// 
// Your accumulator should be a number. 
// 
// Use the salary attribute of each employee. 
//
// 
// 
// Write your code below:

const totalSalary = employees.reduce((accumulator, employee) => {
    return accumulator + employee.salary;
},0)

console.log(totalSalary);



// 09. Group employee names by department. 
// // 
// // Expected output: 
// 
// 
// 
// { // IT: ["Ravi", "Nadeesha"], 
// 
// HR: ["Saman"] // } // 
// // Hint: 
// 
// Your accumulator should be an object containing arrays. 
// 
// If a department does not exist yet, create an empty array. 
// 
// Add the employee's name to the correct department. // 
//
// Write your code below:
const departArray = employees.reduce((accumulator, employee) => {

    if (!accumulator[employee.department]) {
        accumulator[employee.department] = [];
    }

    (accumulator[employee.department] ?? []).push(employee.name);

    return accumulator;

}, {} as Record<string, string[]>);

console.log(departArray);


// ============================================= // CHALLENGE LEVEL // ============================================= 
// 
// 10. Create a summary object containing FOUR calculated attributes: // // totalEmployees // totalSalary // averageSalary // highestSalary // 
// 
// Expected output: // // { // totalEmployees: 3, // totalSalary: 300000, // averageSalary: 100000, // highestSalary: 120000 // } // 
// 
// Rules: // - You must use reduce(). 
// 
// - Use an object as the accumulator. 
// 
// - Calculate all four values during the reduce operation. 
// 
// - Do not use separate loops or another reduce() call. // 
// // Hint: 
// 
// Your accumulator starts with an object containing all four properties. /
// / Update the properties as each employee is processed. // 
// 
// Write your code below:

const totalOfEverything = employees.reduce((accumulator , employee) => {
    accumulator.totalEmployees++;
    accumulator.totalSalary += employee.salary;

    (accumulator.averageSalary + employee.salary) % 3;
    
    if(accumulator.highestSalary < employee.salary) {
        accumulator.highestSalary = employee.salary;
    } 

    return accumulator

},{
    totalEmployees: 0,
    totalSalary: 0,
    averageSalary: 0,
    highestSalary: 0
} as {
    totalEmployees : number,
    totalSalary : number,
    averageSalary : number,
    highestSalary: number
});

console.log(totalOfEverything);