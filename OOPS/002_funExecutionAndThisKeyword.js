/*
    In Javascript, there are 4 ways of function execution

    -->Method#1 - Regualr Method
    function foo(){
        console.log('hello');
    }
    foo();
        
    -->Method#2 - Function inside object
    var newObject = {}
    newObject.foo = function(){
        console.log('Hello');
    }
    newObject.foo();
            
    -->Method#3 - constructor Execution
    function Car(){
        this.modleNo : '21321',
        this.topSpeed : 180,
        this.year : 2012
    }
    var carData = new Car();
        
    -->Method#4 - 
    A function in javascript is an object and hence function also has some properties
    one such prperty is called called call function
    hence foo() and foo.call() is same but the only difference is the execution is the 
    this reference for both the function

    in Method#2 this refers to the global object and 
    in Method#4 this refers to the object which is send as an argumnet in the call property
    of the function

    foo.call({})

*/


/*
    this keyword in javascript refers to an object
    and this reference depends on where this keyword is used

    Also depending on the type of function Execution, the refernce of this keyword vary

    --> in Method#1 - regular method
    function foo(){
        console.log('hello')
        console.log(this)       //-->Here this refers to the global object
    }

    --> in Method#2 - function inside an object
    var user = {
        name : 'Jhon',
        age : 23,
        details : function(){
            console.log(this)           //-->Here this refers to the object user
            console.log(this.name)
            console.log(this.age)
        }
    }

    -->in Method#3 - constructor execution
    var User(){
        //var this = {};        //-->Here this refers to the object that has been created
        this.name = 'Jhon'
        this.age = 23
        //return this
    }
    var user1 = new User();

    --> Method#4 
    foo.call({});               //-->Here this keyword refers to the object send as an argumnet inside the call function
*/

//Example of Method#4
function Bicycle(bikeNo,speed,gear,tirePressure){
    this.bikeNo = bikeNo;               //-->this refers to the object that has been created
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function (){
        this.tirePressure+=3;           //-->this refers to the global object(here to the object that is created)
    }
}
var bicycle1 = new Bicycle(1,20,2,25);
console.log(bicycle1);
bicycle1.inflateTires();
console.log(bicycle1);

function Mechanic(name){
    this.name = name;
}
var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;

console.log(mike);
console.log(mike.inflateTires);
console.log(bicycle1.tirePressure);
mike.inflateTires.call(bicycle1);
console.log(bicycle1.tirePressure);