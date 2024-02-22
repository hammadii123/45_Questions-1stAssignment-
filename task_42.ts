
let magicians: string[] = ["Celestria Vortex", "Mystic Emberglow", "Enchantara Whisperwind", "Arcane Shadeflame"];

function makeGreat(magicianArray: string[]) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}

function showMagicians(magicianArray: string[]) {
    for (let i = 0; i < magicianArray.length; i++) {
        console.log(magicianArray[i]);
    }
}

makeGreat(magicians);


showMagicians(magicians);
