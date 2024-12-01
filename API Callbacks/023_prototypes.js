//Array Prototype
// Array.prototype
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

//String Prototype
// String.prototype
// String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}

//We can Create our own prototype metohd as:
Array.prototype.yell = () => {
    console.log("I Can Yell Aloud!!!!!!");
}
() => {
    console.log("I Can Yell Aloud!!!!!!");
}

//Test OutPut
/*
[1,2,3].yell()
I Can Yell Aloud!!!!!!*/

String.prototype.callMeAgain = function () {
    console.log(this);
    console.log(`Hello ${this} Developer`);
}
/*
ƒ () {
    console.log(this);
    console.log(`Hello ${this} Developer`);
}*/

"Bhavyank".callMeAgain()
/*
VM1173:2 String {'Bhavyank'}
VM1173:3 Hello Bhavyank Developer
*/