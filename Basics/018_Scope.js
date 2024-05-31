/*
    Scope of a variable is limited to the function or a block in which they are present


    //Syntex -1
    let variable1 = 0 ;             -> this varable is a globallly declered variable and has a scope in entire function
    function play(){
        let variable1 = 10;         -> this variable has a scope in the function only
        console.log(variable1);
    }

    output -> 10


    //Syntex -2
    let variable1 = 0 ;             -> this varable is a globallly declered variable and has a scope in entire function
    function play(){
        console.log(variable1);
    }

    output -> 0
*/

/*
    let and const are function or block bound keyword
    var is a global keyword


    ex-

    //Syntex - 1
    let name = "john";                  -> global scope
    if(let i = 1 ; i <= 5 ; i++){       -> block scope 
        const PI = 3.14159;             -> block scope
        let msg = "hello";              -> block scope
    }

    console.log(PI);        -> Gives error
    console.log(msg);       -> gives error
    console.log(name);      -> gives output as "john"
    console.log(i);         -> gives error






    //Syntex - 2
    let name = "john";                  -> global scope
    if(var i = 1 ; i <= 5 ; i++){   -> global scope 
        var PI = 3.14159;             -> global scope
        var msg = "hello";              -> global scope
    }

    console.log(PI);        -> Gives 3.14159
    console.log(msg);       -> gives "hello"
    console.log(name);      -> gives output as "john"
    console.log(i);         -> gives 5

*/