/*
Async function can be made by writing Async in front of any function
A Async funtion allways return a promice
    If a function return a value then our promise will be resolved with that value

    A promise is rejected when any syntex error occures 
    or 
    A promise is rejected when we throw an error
    e.g - throw new Error("This is an error")
    or 
    Just throwing a string
    e.g- throw 'OH NO Error Occured!!!!'
*/

/*
    async function hello(){
    }
    
    
    hello()
    Promise {<fulfilled>: undefined}
    
    async function hello(){
        return 'helloWorld';
    }
    
    hello()
    Promise {<fulfilled>: 'helloWorld'}
    
    hello().then((data)=>{console.log(data)})
    helloWorld
    Promise {<fulfilled>: undefined}
    
*/

/*
=>Generating an Error

    async function hello(){
    throw new Error('This is an Error');
    }

    hello()
    Promise {<rejected>: Error: This is an Error
        at hello (<anonymous>:2:11)
        at <anonymous>:1:1}
    Uncaught (in promise) Error: This is an Error
        at hello (<anonymous>:2:11)
        at <anonymous>:1:1
    hello @ VM365:2
    (anonymous) @ VM387:1


    hello().catch((error)=>{console.log(`You Got an error message saying : ${error}`)})
    VM517:1 You Got an error message saying : Error: This is an Error
    Promise {<fulfilled>: undefined}
*/

/*
=>Generating Error type 2

    async function hello(){
    throw 'OH NO Error Occured!!!';   
    }
   
    hello().catch((error)=>{console.log(error)})
    VM727:1 OH NO Error Occured!!!
    Promise {<fulfilled>: undefined}
*/