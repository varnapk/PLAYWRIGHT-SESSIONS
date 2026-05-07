/*
Syntax- using object literal
let object_name={
    key1:value1,
    key2:value2,
}
*/
let student1 = {
  name: "Varna",
  age: 31,
};
console.log(student1.name, student1.age);
// In the above line of codes, 'student1' is object name, brackets means object literals, 'name' and 'age' are property names, 'varna' and 31 are value of the property.
// cant give console.log statement inside the object literal
console.log(
  "*****************************************************************************",
);

//Syntax- object literal with method or function

let student2 = {
  first_name: "meghna",
  last_name: "meghu",
  full_name: function getF() {
    console.log(this.first_name + this.last_name); //the keyword 'this' is used to acces the property inside the object
  },
};
student2.full_name();
console.log(student2.first_name);
console.log(student2.last_name);
console.log(
  "*****************************************************************************",
);

//short hand method
let student3 = {
  name:"tom",
  age: 20,
  study() {
    console.log(this.name, this.age);
  },
};
student3.study();
console.log(
  "**********************************************************************************",
);

//object literals with parameterized
let student4 = {
  name: "kiran",
  study(subject) {
    console.log(this.name + " is studying " + subject);
  },
};
student4.study("maths");
student4.study("science");
console.log(student4.name);
console.log(
  "**************************************************************************************",
);

//method with return

let student5 = {
  name: "Rishi",
  study(subject) {
    return this.name + " is studying " + subject;
  },
};
//calling method and storing the return value
let result1 = student5.study("maths");
let result2 = student5.study("science");
//printing the return values
console.log(result1);
console.log(result2);
//console.log(student5.name)
console.log(
  "**************************************************************************************s",
);
