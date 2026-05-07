//class is collection of objects

/*syntax:
class classname{

}*/
// Type1: giving properties and property values inside the class and accessing that property using the class object.
class Student1 {
  name = "Varna";
}
//in the above code, 'class' is a keyword and 'student' is the class name. curly brackets {} is used to define the class
// syntax for object creation: let object name= new classname
let obj = new Student1(); // creating an object to access the variable inside the class
console.log(obj.name); // printing the property value in the console.
console.log("**************************************************************");

//Type2: Giving property, property value and one method inside the class.
class student2 {
  name = "Tester2";
  display() {
    console.log(this.name);
  }
}
let obj1 = new student2();
obj1.display(); // calling the method using class object. Then the method wil get run and print the property value in the console.
console.log("**************************************************************");

//Type3: In the class, Property and property value are declared inside the parameterized constructor. one method is also there in the class.
class student3 {
  constructor(name) {
    this.name1 = name;
  }
  display() {
    console.log(this.name1);
  }
}
let obj2 = new student3("Varna PK"); // passing the property value while creating the object. while creating the object the construictor will execute.
obj2.display();
console.log("**************************************************************");

//Type4: Constructor with multiple parameters
class student4{
  constructor(name,age){
    this.name1=name
    this.age1=age
  }
  display(){
    console.log(this.name1,this.age1)
  }
}
let obj4= new student4("tester10", 30)
let objnew4= new student4("tester11", 40)
obj4.display()
objnew4.display()
console.log("*********************************************")
//Type 5: Using getter method, getter method is used to read the data.
class student5{
  get college(){
    return "ABC College"
  }
}
let obj5=new student5()
console.log(obj5.college)// accessing the getter method using object, here no need to mention the method bracket, just write the method name only.