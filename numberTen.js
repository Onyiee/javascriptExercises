// 10 - Write a JavaScript program to compute the sum and product of an array of integers.

const prompt = require('prompt-sync')()
var arrayElements = [];
arrayElements.length = 5;
var i;
var j;
var k;

for(i = 0; i < arrayElements.length; i++){
 arrayElements[i] = parseInt(prompt("Enter a number: ")) ;
}
console.log(sumOfArrayElements())
console.log(productOfArrayElements())
function sumOfArrayElements(){
    var sum =0;
    for(j = 0; j < arrayElements.length; j++){
         sum = sum + arrayElements[j];
    }
    return sum;    
}  

function productOfArrayElements(){
    var product = 1;
    for(k = 0; k < arrayElements.length; k++){
        product = product * arrayElements[k];
    }
    return product;
}
