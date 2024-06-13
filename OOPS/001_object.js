// creating JS object
var emp1 = {
    firstName : "Tim",
    lastName : "David",
    gender : 'M',
    age : 43,
    position : "Product Manager"
}
//creating JS object
var emp2 = {}
emp2.firstName = "Jhon"
emp2.lastName = "Cremson"
emp2.gender = 'M'
emp2.age = 33
emp2.position = "Assistant Product Manager"

//JS function to create and return an obejct
function createEmploeeObject1(firstName,lastName,gender,age,position){
    var newObject = {}
    newObject.firstName = firstName
    newObject.lastName = lastName
    newObject.gender = gender
    newObject.age = age
    newObject.position = position
    return newObject
}
var emp3 = createEmploeeObject1("Jim","Carol",'M',35,"Executive Officer");

//JS constructor to create and return an object
function CreateEmploeeObject2(firstName,lastName,gender,age,position){
    //var this = {}
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.age = age
    this.position = position
    //return this
}
var emp4 = new CreateEmploeeObject2("Samira","Diago",'F',29,"Assistant Executive Manager");
console.log(emp4)