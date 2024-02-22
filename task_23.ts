let number: number = 7;

// Test 1:
console.log("Is the number equal to 7? I predict True.");
console.log(number === 7);

//Test2:
console.log("Is the number not equal to 5? I predict True.");
console.log(number !== 5);



console.log("Is the string 'apple' equal to 'orange'? I predict False.");
//@ts-ignore
console.log('apple' === 'orange'); // Error occurs if we dont write "//@ts-ignore"

// Test 10:boolean not equals to false?
console.log("Is the boolean true not equal to false? I predict True.");
//@ts-ignore
console.log(true !== false); // Error occurs
