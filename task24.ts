// String Tests
console.log("String Tests:");
console.log("hello" === "hello"); 
//@ts-ignore
console.log("apple" !== "banana"); 
console.log("world".toUpperCase() === "WORLD"); 
console.log("World".toLowerCase() !== "world"); 
console.log("HELLO world".toLowerCase() === "hello world");
//@ts-ignore
console.log("lowercase" !== "LOWERCASE"); 

// Numerical Tests
console.log("Numerical Tests:");
console.log(10 === 10); 
//@ts-ignore
console.log(5 !== 7); 
console.log(20 > 10); 
console.log(5 < 3); 
console.log(15 >= 15); 
console.log(8 <= 4); 

// Logical Operators
console.log("Logical Operators:");

console.log((9 > 6) && (10 < 15)); 
console.log((2 === 2) && (4 !== 4))
console.log((7 > 2) || (12 === 12)); 
console.log((5 === 5) || (8 !== 8)); 

// Array Tests
console.log("Array Tests:");
const fruits: string[] = ["apple", "banana", "orange"];
const numbers: number[] = [1, 2, 3];
console.log(fruits.includes("banana"));
console.log(numbers.includes(4)); 
console.log(fruits.indexOf("grapefruit") === -1); 
console.log(numbers.indexOf(20) === -1); 

// Bonus Tests
console.log("Bonus Tests:");
console.log(!!"" === false); 
console.log(!!10 === true); 
console.log(typeof 42 === "number"); 
console.log(typeof "hello" === "string");
