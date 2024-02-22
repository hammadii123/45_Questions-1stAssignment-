function createCar(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];

        car[key] = value;
    }

    return car;
}


const carInfo = createCar("Toyota", "Camry", "color", "Blue", "year", 2022, "optionalFeature", "Sunroof");


console.log(carInfo);
