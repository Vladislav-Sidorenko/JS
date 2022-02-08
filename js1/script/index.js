//Home work

    //min level 

//1 - JS already connected with html file
//2 corrent names 
let Myname = 'Vlad';
let MyFirstName = 'Vlad';
let userName = 'Vlad';
let $name = 'Vlad';

/* incorrect names
let My-name = 'Vlad';
let 1stName = 'Vlad';
let user Name = 'Vlad';
let let name = 'Vlad'; */

//3 Comments 

//4 Camelcase ; snake_case; PascalCase



    //normal level 

//1
let userName = prompt ('Whats your name?');
console.log ('Hi,',userName); 

//2

let userDateOfBirth = prompt ('Whats your year of birth?')
const CURRENT_YEAR = 2022;

let userAge = CURRENT_YEAR - userDateOfBirth;
console.log (userAge);

//3
let squareSide = prompt ('Write down the square side');
let squarePer = squareSide * 4;
console.log (squarePer);

    // max level

//1
let radius = prompt ('Write down the circle radius');
const PI_NUMBER = 3.14;
let circleS = PI_NUMBER * (radius * radius);
console.log (circleS);

//2
let city1 = 100;
let city2 = 200;
let distance = city2 - city1;
let timeInRoad = prompt ('How many hours does it take to get from city1 to city2?');
let userSpeed = distance / timeInRoad;
console.log (userSpeed);

//3
let USD = 25;
let EUR = 30;
const CURRENCY_EXCHANGE = USD / EUR;
let userUSD = prompt ('How many USD you want to exchange?');
console.log (userUSD * USD * CURRENCY_EXCHANGE);


