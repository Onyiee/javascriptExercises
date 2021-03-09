// 9 - Write a simple JavaScript program to join all elements of the following array into a string.
//  Sample array : myColor = ["Red", "Green", "White", "Black"];
// *** Expected Output: "Red,Green,White,Black" "Red,Green,White,Black" "Red+Green+White+Black"
const prompt = require('prompt-sync')()
var arrayElements = [];
arrayElements.length = 5;


function arrayElementsToString(){
    var i;
    for(i = 0; i < arrayElements.length; i++){
        arrayElements[i] = prompt("Enter a value for the array: ");   
    } 
     
    var stringArrayElements = arrayElements.join();
    return stringArrayElements;
    }  
   


var answer = arrayElementsToString();
console.log(answer);