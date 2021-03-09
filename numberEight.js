// 8 - Write a JavaScript function to get the first element of an array. Passing a parameter 
// 'n' will return the first 'n' elements of the array. example - console.log(first([7, 9, 0, -2])); 
// console.log(first([],3)); console.log(first([7, 9, 0],3)); console.log(first([7, 9, 0, -2],6));
//  Output should be: Expected Output : 7
// [] [7, 9, 0] [7, 9, 0, -2]
const prompt = require('prompt-sync')()


function firstElementInArray(n=0){
    var arrayElements = [];
     arrayElements.length = 5;
    var i;
    for(i = 0; i < arrayElements.length; i++){
        arrayElements[i] = parseInt(prompt("Enter a number: "));
    }
 
    var arrayFirstElement = arrayElements[0];
    if(n===0){
        return arrayFirstElement;
    } else{
        return arrayElements.splice(0,n)
    }

 }

 var arrayAnswer = firstElementInArray(4);
 console.log(arrayAnswer);