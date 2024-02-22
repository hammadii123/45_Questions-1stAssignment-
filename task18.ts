const List: string[] = ["Muree", "Japan", "Germany", "Australia", "Paris"];


console.log("Original list:");
console.log(List);


console.log("\nAlphabetical order (copy):");
console.log(List.slice().sort()); // Creates a copy and sorts it


console.log("\nOriginal list (unchanged):");
console.log(List);


console.log("\nReverse alphabetical order (copy):");
console.log(List.slice().sort().reverse());


console.log("\nOriginal list (unchanged):");
console.log(List);

List.reverse();

console.log("\nReversed order:");
console.log(List);
List.reverse();

console.log("\nOriginal order restored:");
console.log(List);

List.sort();


console.log("\nAlphabetical order (sorted):");
console.log(List);


List.sort().reverse();

console.log("\nReverse alphabetical order (sorted):");
console.log(List);
