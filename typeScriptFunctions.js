"use strict";
function sampleFunction() {
    // defining a function named sampleFunction that does not return any value (void). 
    //Type inference: type script can automatically identify the type of the variable based on the value assigned to it. In this case, the type of the variable message is inferred as string.
    console.log("This is a sample function in TypeScript");
}
sampleFunction(); // calling the function to execute the code inside it.
console.log("**************************************************");
//Parameterized Functions: Functions that can accept parameters (inputs) to perform specific tasks.
function addition(a, b) {
    console.log(a + b);
}
addition(5, 10); // calling the addition function with arguments 5 and 10, which will output 15.
console.log("**************************************************");
//Function with return type
function substraction(a, b) {
    return a - b; // returning the result of the substraction of a and b.
}
console.log(substraction(10, 5));
console.log("**************************************************");
//NEVER
function stop() {
    throw new Error("Something Went Wrong");
}
stop();
