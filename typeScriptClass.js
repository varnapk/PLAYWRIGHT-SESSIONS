"use strict";
class SampleClass {
    sample() {
        console.log("sample function inside a class");
    }
}
const obj = new SampleClass(); // creating an object of the class SampleClass to access its properties and methods.
obj.sample(); // calling the sample method of the SampleClass using the object obj to execute the code inside it.
class ParameterizedClass {
    sample2(stringValue) {
        console.log("This is a parameterized function inside a class and the value of the parameter is: " + stringValue);
    }
}
const obj2 = new ParameterizedClass(); // creating an object of the class ParameterizedClass to access its properties and methods.
obj2.sample2('Hello');
class constructorClass {
    constructor(name) {
        console.log("This is a constructor function inside a class which is automatically called when an object of the class is created.");
        console.log("The value of the parameter passed to the constructor is: " + name);
    }
    printmethod() {
        console.log("This is a regular method inside the constructorClass.");
    }
}
const obj3 = new constructorClass("Testname");
class constructorType2Class {
    age;
    constructor(rollnumber) {
        this.age = rollnumber;
        console.log("This is another constructor function inside a class which is automatically called when an object of the class is created.");
        console.log("The value of the parameter passed to the constructor is: " + rollnumber);
    }
    printmethod2(name) {
        console.log("This is a regular method inside the constructorType2Class and the value of the parameter passed to this method is: " + name);
        console.log(name);
        console.log("The value of the age property is: " + this.age);
    }
}
const obj4 = new constructorType2Class(101);
