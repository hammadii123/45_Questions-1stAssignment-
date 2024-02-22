function Sandwich(...items: string[]) {
    if (items.length === 0) {
        console.log("You didn't choose any items for your sandwich.");
    } else {
        console.log("Sandwich Summary:");
        console.log("Bread: Whole Wheat");
        console.log("Fillings:");
        for (let i=0;i<items.length;i++) {
            console.log(items[i]);
        }
        console.log("Enjoy your sandwich!");
    }
}

Sandwich("Ketchup", "Cheese", "Chicken", "Tomato");
Sandwich("mayonees", "Swiss Cheese", "Mustard");
Sandwich(); 