function sampleFunction():void{
// defining a function named sampleFunction that does not return any value (void). 
//Type inference: type script can automatically identify the type of the variable based on the value assigned to it. In this case, the type of the variable message is inferred as string.
    console.log("This is a sample function in TypeScript")
}
sampleFunction()// calling the function to execute the code inside it.
console.log("**************************************************")
//Parameterized Functions: Functions that can accept parameters (inputs) to perform specific tasks.
function addition(a:number,b:number){
    console.log(a+b)
}
addition(5,10)// calling the addition function with arguments 5 and 10, which will output 15.
console.log("**************************************************")
//Function with return type
function substraction(a:number,b:number):number{
    return a-b // returning the result of the substraction of a and b.
}
console.log(substraction(10,5))
console.log("**************************************************")
//NEVER
function stop():never{
// The never type represents a value that never occurs. It is used to indicate that a function will never return a value or that a variable will never hold a value. In this case, the stop function will always throw an error and will never return a value, hence it is of type never.
    throw new Error("Something Went Wrong")
}
stop()