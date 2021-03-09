// 6 - Write a function rotate that rotates the elements of an array. All elements should be moved
//  one position to the left. The 0th element should be placed at the end of the array. The rotated 
//  array should be returned. ** Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].
const prompt = require('prompt-sync')()
var arrayElements = [];
arrayElements.length = 6;

function  rotate(arrayElements){
    var i;
    for(i = 0; i < arrayElements.length; i++){
        arrayElements[i] = parseInt(prompt("Enter a number: "));
    }
    var arrayFirstElement = arrayElements.shift();
     newArrayElement = arrayElements.push(arrayFirstElement);
    return arrayElements;

} 

var arrayAnswer = rotate(arrayElements);
console.log(arrayAnswer);