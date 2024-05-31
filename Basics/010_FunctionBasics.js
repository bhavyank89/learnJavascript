//---------------- Defining Of Function -------------------

//Method 1
/*
    function functionName( function argument ) {
        //Code goes here;
    }
*/



//Example-1
/*
    function greet(person) {
        console.log(`Hi ${person}`);
    }
    let person
    while (person != "quiet") {
        person = prompt("What's your name:");
        greet(person);
    }
*/


//Example -2 
/*
    function repeat(str, num) {

        for (let i = 1; i <= num; i++) {
            console.log(str);
            console.log("hi");
        }
    }
    repeat("hello", 10);
*/

//Example -3 

function add(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        return "Not valid argument";
    }
    else {
        return x + y;
    }
}

let num1 = parseInt(prompt("Enter number 1 : "));
let num2 = parseInt(prompt("Enter number 2 : "));
let sum = add(num1, num2);
console.log(sum);