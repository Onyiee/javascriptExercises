// 5 - Write a function addWithSubcharge that adds two amounts with subcharge. For 
// each amount less than or equal to 10, the subcharge is 1. For each amount greater than 10, the subcharge is 2.

const prompt = require('prompt-sync')()

function addWithSubcharge(firstAmount, secondAmount){
    var firstAmount = parseInt(prompt("Enter a first amount : ")) 
    var secondAmount = parseInt(prompt("Enter a second amount: "))
    let subcharge =0
    if(firstAmount <= 10){
        subcharge +=1;
    }else {
        subcharge += 2;
    }
    if(secondAmount <= 10){
        subcharge+=1;
    }else{
        subcharge += 2;
    }

    return amountWithSubcharge = firstAmount + secondAmount + subcharge;

}

var subchargeAnswer = addWithSubcharge();
console.log(subchargeAnswer);