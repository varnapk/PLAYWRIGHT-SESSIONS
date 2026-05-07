//inheritance means acquiring properties of parent/super class by child/sub class
//inheritance is achieving by using the keyword extends
//Type1: Creating object for child class and accessing the parent class method
class Parent {
  display() {
    console.log("Inheritance Demo.............");
  }
}
class Child extends Parent {}
let objchild = new Child();
objchild.display();
console.log("**************************");
//Type1: Creating object for child class and accessing the parent and child class methods
class Animal {
  eat() {
    console.log("animal is eating");
  }
}
class Cow extends Animal {
  run() {
    console.log("animal is running");
  }
}
let objcow = new Cow();
objcow.eat();
objcow.run();
console.log("**************************");
//Type3: Using constructor only in parent class
class Person {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log("Hello " + this.name);
  }
}
class Personone extends Person {
  show() {
    console.log("Hi good mng");
  }
}
let objchild2 = new Personone("Jhon");
objchild2.display();
objchild2.show();
console.log("**************************");
//Type4: using the keyword "Super", super keyword is used to access parentclass methods and constructors
class Parent1{
    show1(){
        console.log("Hi this is a method from parent class")
    }
}
class Child3 extends Parent1{
    show1(){
        super.show1()
        console.log("Hi this is a method from child class")
    }
}
let objchild3= new Child3()
objchild3.show1()
console.log("**************************");
//Type5: Super is using for constructor access
class Person10{
    constructor(name){
        this.name=name
    }
    }
class Student10 extends Person10{
    constructor(name,mark){
        super(name)
        this.mark=mark
    }
    show(){
        console.log("Name: "+this.name+" "+", "+"Mark: "+this.mark)
    }
}
let objstudent10=new Student10("Tester", 95)
objstudent10.show()
