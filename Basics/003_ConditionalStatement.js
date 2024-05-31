
// console.log() used to print, executed result
console.log("Hello from my first JS File!!!!");
console.log("GoodBye!");
console.log(" ");       //Leaves a blank line



// If Conditional Statement
let random = Math.random();
if (random > 0.5) {
    console.log("Number is Greater than 0.5");
    console.log(random);
}
if (random <= 0.5) {
    console.log("Number is less than or equal to 0.5");
    console.log(random);
}

console.log(" ");       //Leaves a blank line





// Else-if Condition Statement
let randInt = Math.floor(Math.random() * 5); //A random Integer between 0 and 5 (5 Excluding)

if (randInt < 1) {
    console.log(randInt + " Is Less than or equal to 1");
}
else if (randInt < 2) {
    console.log(randInt + " Is Less than or equal to 2");
}
else if (randInt < 3) {
    console.log(randInt + " Is Less than or equal to 3");
}
else if (randInt < 4) {
    console.log(randInt + " Is Less than or equal to 4");
}
else if (randInt < 5) {
    console.log(randInt + " Is Less than or equal to 5");
}

console.log(" ");       //Leaves a blank line





// Else Conditional Statement
let age = Math.floor(Math.random() * 100 + 1) //Age between 1 to 100 (100 Including)

if (age < 18) {
    console.log("Your age is " + age + ".You are below 18. You cannot drive");
}
else {
    console.log("Your age is " + age + ".You are above 18. You can drive");
}

console.log(" ");       //Leaves a blank line






//Nested Condition
let password = prompt("Enter a password"); //Takes Input from User

//Condition_CheckPoint_1 = Password must be >=6 digit long
if (password.length >= 6) {

    //Condition_CheckPoint_2 = Password Must Not Contain Blank Space
    if (password.indexOf(" ") === -1) {

        // Note:- password.indexOf(" ") return -1 if password does not contain blank space
        //        password.indexOf(" ") return index of the blank space present in the password

        console.log("Great! Job");
    }
    else {
        console.log("Your password contain blank space");
    }
}
else {
    console.log("Password is too short");
}

console.log(" ");       //Leaves a blank line
