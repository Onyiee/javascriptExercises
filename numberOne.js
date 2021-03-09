// 1 - Write a JavaScript program to check two given numbers and return true if one of the number is 50 or
//  if their sum is 50.

const prompt = require('prompt-sync')()

function sumOfNumbers(){
    var number1 = parseInt(prompt("Enter a first number : ")) 
    var number2 = parseInt(prompt("Enter a second number: "))
    var numbersSum = number1 + number2;
    if (number1 == 50 || number2 == 50 || numbersSum == 50 ){
        return true;
    }else{
        return false;
    }
}

 var answer = sumOfNumbers()
 console.log(answer);