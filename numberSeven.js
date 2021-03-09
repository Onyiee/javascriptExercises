// 7 - Write a JavaScript program to compute the sum of the two given integers.
//  If the two values are same, then returns triple their sum.
const prompt = require('prompt-sync')()
function sumOfNumbers(){
    let number1 = parseInt(prompt("Enter a number: "));
    let number2 = parseInt(prompt("Enter a number: "));
    var sum = number1 + number2;
    if(number1 == number2){
        return sum * 3;
    }
    return sum;
}

var answer = sumOfNumbers();
console.log(answer);