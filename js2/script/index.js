// Home work JS_2

    //min level

//1
num = 0.1 + 0.2;
console.log(num.toFixed(1));

//2 
let firstLine = '1';
let secondLine = 2;
let sum = Number(firstLine) + Number(secondLine);
console.log (sum);

//3
let flash_memory = prompt ('Write the flash memory in GB')
let file_memory = 820
console.log (Number(flash_memory) * 1000 / file_memory)

   
    //norm level

//1
let userMoney = prompt ('How much money do you have in USD?');
let chocPrice = prompt ('Whats the chocolate price in USD?');
let chocAmount = userMoney / chocPrice;
let moneyLeft = userMoney - (chocAmount * chocPrice);
console.log ('You can buy- ',chocAmount, 'chocolates');
console.log ('You have -', moneyLeft,  'USD left');

//2 
let sum = 456
let number1 = sum % 10;
let number2 = parseInt(sum / 10) % 10;
let number3 = Math.floor (sum / 100) ;


console.log(number1, number2, number3)

    // max level

//1
let userMoney = prompt('Write your sum')
let bankPerc = 0.05
let term = 2
let FinalResult = Number(userMoney * bankPerc * term) + Number(userMoney)

console.log (FinalResult)

//2 
//Що повернуть вираження:

2 && 0 && 3  // 0

2 || 0 || 3  // 2

2 && 0 || 3 // 3