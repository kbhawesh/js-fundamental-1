/*1. Suppose you are building a payment checkout page and must display the final price after the discount.
Create a simple discount calculator that takes two values from the variables - the total cost and the
discount percentage - and prints the discounted value.
*/

let totalValue = 2000;
let discountPer = 20;

let discountPrice = totalValue -(discountPer/100) * totalValue;

console.log("The final price after discount is :" + discountPrice);