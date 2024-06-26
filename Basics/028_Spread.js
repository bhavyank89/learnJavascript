//------------------ JS Spread -------------------------------------------


/*
const arrNums = [4,56,67,54,2,1223,4,7,75,342,32,435]

Math.max(arrNums) //Here array elements are not passed individually
NaN

Math.max(...arrNums) //Here array elements are spread individually
1223

Math.min(...arrNums) //Here array elements are spread individually
2

const greet = "Hello Everyone How's going";

console.log(...greet) //Here each string element is sperad individually
H e l l o   E v e r y o n e   H o w ' s   g o i n g

*/



/*
//------------------ Creating a new array using spread ----------------------
const dogs = ['stuffy','browny','orton']

const cats = ['fluffy','stuff']

const allPets = [...dogs,...cats,'asdas']

allPets
['stuffy', 'browny', 'orton', 'fluffy', 'stuff', 'asdas']

*/

/*
//---------------- Spreading an Object ----------------------------------
// We can combine or copy object form one to another

const user = {
    fname : "john",
    lname : "deow",
    branch : "ECE-Core"
}

const newUser = {...user,email : "example@123",password : "iiitn@123X", rollNumber : "BT22ECE"}

newUser
branch : "ECE-Core"
email : "example@123"
fname : "john"
lname : "deow"
password : "iiitn@123X"
rollNumber : "BT22ECE"

*/
