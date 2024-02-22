//TASK 14:
let guest: string[]=["Hammad","Mubashir","Daniyal","Ali"];
for(let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]}, you are invited to dinner. Please join us for a delightful evening!`);
}

//TASK:15
console.log("--------------------------------------------------");
console.log(`2) Unfortunately ${guest[2]},cannot make it for the dinner`);
guest[2]="Jawad";
console.log("Updated List:");
console.log("--------------------------------------------------");

for(let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]}, you are invited to dinner. Please join us for a delightful evening!`);
}

//TASK16:


console.log("\n3) i found a bigger dinner table now 3 more guests will be joining us.");
console.log("--------------------------------------------------");
//Add in begining:
guest.unshift("Hamza");
//Add in middle:
guest.splice(2,0 ,"Laiba");
//Add in the end;
guest.push("Dawood");
for(let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]}, you are invited to dinner. Please join us for a delightful evening!`);
}


//Task 17:
console.log("\n4) I can invite two people for dinner because of un unavailability of the table.");
console.log("--------------------------------------------------");
console.log(guest.length);
for (let i = guest.length - 1; i >= 2; i--) {
    console.log(`Sorry ${guest[i]}, I cannot invite you to the dinner!`);
    guest.pop();
}
console.log("Updated List:");
console.log("--------------------------------------------------");
for(let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]}, you are still invited to dinner.`);
}
console.log("removing last two elements also");
//removing last two elements also
guest=[];
console.log("Guest list="+"["+guest+"]");

