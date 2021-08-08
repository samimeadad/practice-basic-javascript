function centimeterToMeter(centimeter){
    let meter = centimeter/100;
    return meter;
}

let myCentiMeter = 150;
let myMeter = centimeterToMeter(myCentiMeter);
console.log(myMeter);