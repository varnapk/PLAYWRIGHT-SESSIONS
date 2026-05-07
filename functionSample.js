/* function with name:
   function functionname(){
      code
   }*/
function display() {
  console.log("goodmorning");
}
display();
//Function with parameter
function add(a, b) {
  console.log(a + b);
}
add(10, 20);

function addition(a, b) {
  return a + b;
}
let sum = addition(40, 50);
console.log(sum);

/*function without name(anonymous function)- while creating a function without name, we have to assign it to a variable.
 we have to call that variable while calling the function*/

let function1=function() { 
  console.log("goodmorning");
}
function1();

//Changing the anonymous function to arrow function
//-> method1
let function2=()=>console.log("anonymous function method1")
function2()

//method2
let function3=()=>"anonymous function method2 "
console.log(function3())

//passing parameters in to arrow function
//-> method1
let sumnew = (a, b) => console.log("parameter arrow function method 1 result is :", a + b)
sumnew(1, 2);

//-> method2
let sumnew1 = (a, b) => a + b;
console.log("parameter arrow function method 2 result is:",sumnew1(1, 2));