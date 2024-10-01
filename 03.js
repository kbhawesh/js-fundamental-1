/* 3. You are working on a currency conversion application. Write a program that has a variable which stores the
amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current
exchange rate of 1 USD = 82 INR.
*/

let amountInINR = 950;
// let amountInUSD = 950 / 52;
let amountInUSD = amountInINR / 52;

console.log(`${amountInINR} INR =  ${amountInUSD} USD`);