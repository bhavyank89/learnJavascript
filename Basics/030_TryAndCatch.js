//Try and Catch is basically and code to find out if any code or function
//Is running properly or will generate an error
//Try never goes alone but is always followed by catch program
//Using try and catch does not stop the execution of whole program
//Insteed it displays runs the catch program, if error is found
//otherwise run the try program
//After running the try and catch program the console run the rest of the program which is still not executed

//e.x:-

//Syntex - 1
/*
try {
    hello.toUpperCase();
}
catch {
    console.log("Hey There is an error!!!!!");
}
*/

/*
function yell(msg){
    try{
        console.log(msg.toUpperCase());
    }
    catch{
        console.log("Please Pass A String");
    }
}

yell(12)
Please Pass A String

yell("hello")
HELLO
*/



//Syntex - 2
/*
try {
    hello.toUpperCase();
}
catch(e) {
    console.log(e);
    console.log("Hey There is an error!!!!!");
}

VM126:5 ReferenceError: hello is not defined
    at <anonymous>:2:5
VM126:6 Hey There is an error!!!!!

*/