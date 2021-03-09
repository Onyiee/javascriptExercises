// 3 - Write a JavaScript program to find the area of a scalene triangle where lengths of the three of
//  its sides are 5, 6, 7.

const prompt = require('prompt-sync')()
function  areaOfScaleneTriangle(side1, side2, side3){
    var side1 = parseInt(prompt("Enter a value for the first side : ")) 
    var side2 = parseInt(prompt("Enter a value for the second side: "))
    var side3 = parseInt(prompt("Enter a value for the third side : ")) 
    var semiPerimeter = (side1 + side2 + side3)/2;
    var triangleAreaCalc =semiPerimeter*( (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    var triangleArea = Math.sqrt(triangleAreaCalc);
    return triangleArea;
}

var areaResult = areaOfScaleneTriangle();
console.log(areaResult);