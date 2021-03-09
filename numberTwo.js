// 2- Write a JavaScript program to check from two given integers, whether one is positive 
// and another one is negative. 
const prompt = require('prompt-sync')()

function positiveAndNegativeChecker(){
    var number1 = parseInt(prompt("Enter a first number : ")) 
    var number2 = parseInt(prompt("Enter a second number: "))

    let firstNumberPositive = number1 >=0;
    let secondNumberPositive = number2 >0;
    if(firstNumberPositive && secondNumberPositive) {
        return"All numbers Positive"
    } else if (!firstNumberPositive && !secondNumberPositive){
        return "Both Numbers Negative "
    } else if ( firstNumberPositive && !secondNumberPositive) {
        return "Only first number is positive"
     } else {
         return "Only second number is positive"
     }
}

var answer = positiveAndNegativeChecker()
console.log(answer)