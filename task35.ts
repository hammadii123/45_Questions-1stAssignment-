let myList = ["cat","dog","rabbit"];
for (let i=0;i<myList.length;i++){
    console.log(myList[i]);

}
//printing each animals statement;
for (let i=0;i<myList.length;i++){
switch(myList[i]){
    case "cat":
        console.log(myList[0]+" has beautful fluffy hairs and beautiful eyes");
        break;
    case "dog":
        console.log(myList[0]+" is a worthy bodyguard");
        break;
        case "rabbit":
            console.log(myList[2]+" has a fluffy look");
            break;
        default:
             console.log("This animal has unique qualities.");
}
    console.log("\nCommon characteristic:");
    console.log("All these animals would make a great pet!");
}