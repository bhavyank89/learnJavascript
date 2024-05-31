//---------------------- SetTimeOut and SetInterval -------------------------------------



//------------------ SetTimeOut -----------------------------------------------

//SetTimeOut is a function call which excepts two argument
//First argument is the function call
//Second Argument is the time of pause

/*
    ->Syntex

    //-->according to the following syntex on execution code run as
    //-->code line 1 -> code line 3 -> code line 2

    //code line 1
    setTimeOut(
        functionCallback , timeOfPause in millisecond //code line 2
    )
        //code line 3

    //-->So the settimeout wait for the time wriiten in the timeofpause and
    //-->let the compiler execute the precceding code and after the timeofpause once
    //-->gets over than settimeout call the function written in its first argument


    console.log("Hi")
    setTimeout(() => console.log("hello........"),1000)
    console.log("ThankYou")

    Hi
    ThankYou
    hello........

*/


//------------------------- SetInterval ------------------------------------------

//SetInterval is a function call which keep on iteratively keep running function call
//after very timeofpause millisecond
//also for every functioncall it return an id of that execution which is an integer
//hence we assign an variable to setInterval to store the id of each execution
//hence this keep on executing untill it is stopped
//SetInterval is stopped by passing it's id as an argument in the the clearinterval() function

/*
        syntex 

        //code line 1 
        const variableName = setInterval(
            functionCallback , timeOfPause in millisecond //code line 2
        )
        //code line 3


        console.log("Hello")
    const id = setInterval(() => console.log("I am in setInterval"),3000)
    console.log("bye")

    Hello
    bye
    I am in setInterval
    I am in setInterval
    I am in setInterval
    I am in setInterval

    clearInterval(id)
*/

