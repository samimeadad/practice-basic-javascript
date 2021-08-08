function feetToInch(feet){
    let inch = feet * 12;
    return inch;
}

let myFeet = 5.6;
let myInch = feetToInch(myFeet);
console.log(myInch);