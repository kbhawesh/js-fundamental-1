/* 6. You are developing a form validation system. Write a program that takes user information(such as name,
email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages
like "Name should be a string," "Email should be a string," or "Age should be a number." if any field is not
proper.
*/


// let name = 'Bhawesh';
// let email = "Kumar.s@gmail.com";
// let age = 21;

let name = "Bhawesh";
let email = "Kumar.s@gmail.com";
let age = "21";

if(typeof name !== "string"){
    console.log(`Name Should Be A String..`);
}
else if(typeof email !== "string"){
    console.log(`Email Should Be A String..`)
}
else if(typeof age !== "string"){
    console.log(`Age Should Be A String..`)
}
else {
    console.log(`Yes! All the fields are proper.`)
}