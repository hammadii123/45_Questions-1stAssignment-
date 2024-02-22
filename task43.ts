{
let magicians: string[] = ["Celestria Vortex", "Mystic Emberglow", "Enchantara Whisperwind", "Arcane Shadeflame"];



function MakeGreat(magicianArray: string[]): string[] {
    const newArray = magicianArray.slice(); // Create a copy of the array
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = "the Great " + newArray[i];
    }
    return newArray;
}

function ShowMagicians(magicianArray: string[]){
    for (let i = 0; i < magicianArray.length; i++) {
        console.log(magicianArray[i]);
    }
}



const greatMagicians = MakeGreat(magicians);



console.log("Original Magicians:");
ShowMagicians(magicians);



console.log("\nMagicians with 'the Great' Added:");
ShowMagicians(greatMagicians);
}