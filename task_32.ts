let currentUsers = ["Arsal", "Saleh", "Ashir", "Ali", "Hammad"];
let newUsers = ["Arsal", "Ibad", "Rafay", "Ali", "Umer"];

for (let i = 0; i < newUsers.length; i++) {
    let lowerCaseNewUser = newUsers[i].toLowerCase();

    if (currentUsers.includes(lowerCaseNewUser)) {
        console.log(`The username '${newUsers[i]}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${newUsers[i]}' is available.`);
    }
}

