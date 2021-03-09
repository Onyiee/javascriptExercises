// 4 - Write a function toArray that takes 2 values and returns these values in an array.
const prompt = require('prompt-sync')()

function toArray(){
    var number1 = parseInt(prompt("Enter a first number : ")) 
    var number2 = parseInt(prompt("Enter a second number: "))
    var arrayValues = [number1, number2]
    return arrayValues;
}

var arrayValuesAnswer = toArray();
console.log(arrayValuesAnswer);