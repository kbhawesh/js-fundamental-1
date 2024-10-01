/*
You are developing a booking application for a cinema. The ticket price depends on the type of the
viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total
price to be paid. Let’s assume
*/

let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalPrice = numberOfChilds * childTicketPrice + numberOfAdults * adultTicketPrice + numberOfSeniors * seniorTicketPrice;

console.log(`The total ticket price is =  ${totalPrice}`);