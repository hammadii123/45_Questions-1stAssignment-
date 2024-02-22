function describe_city(city: string="Karachi",country: string="Pakistan"){
    console.log(`${city} is in ${country}`);
}
console.log("Default parameters:");
describe_city();
console.log("Static parameters:");
describe_city("New dehli","India");
describe_city("Dublin","Ireland");
describe_city("Ankara","Turkey");