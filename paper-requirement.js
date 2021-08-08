function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity){
    let firstBookPages = 100;
    let secondBookPages = 200;
    let thirdBookPages = 300;

    let firstBookPaper = firstBookQuantity * firstBookPages;
    let secondBookPaper = secondBookQuantity * secondBookPages;
    let thridBookPaper = thirdBookQuantity * thirdBookPages;

    let totalPaper = firstBookPaper + secondBookPaper + thridBookPaper;

    return totalPaper;
}

let myFirstBookQuantity = 5;
let mySecondBookQuantity = 2;
let myThirdBookQuantity = 3;

let myTotalPaper = paperRequirements(myFirstBookQuantity, mySecondBookQuantity, myThirdBookQuantity);
console.log(myTotalPaper);