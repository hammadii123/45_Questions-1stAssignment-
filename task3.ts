let Name1= "Hammad Mustafa";


console.log(Name1.toLowerCase()); 

console.log(Name1.toUpperCase()); 


console.log(Name1.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));
