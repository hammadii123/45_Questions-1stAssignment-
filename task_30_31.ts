let usernames=["Arsal","Admin","Ashir","Ali","Hammad"];
let mainUser="Admin";
for (let i=0;i<usernames.length;i++){
    if (usernames[i]==mainUser){
        console.log("Hello "+mainUser+ ", would you like to see a status report?")
    
    }
    else{
        console.log("Hello "+ usernames[i]+", thank you for logging in again.");
    }
}

// Task#31
usernames=[];
 if(usernames.length===0){
    console.log("We need to find some users!")
 }

