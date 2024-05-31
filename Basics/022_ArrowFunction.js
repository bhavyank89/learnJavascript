//------- Arrow Function -----------------------
/*
    Arrow Function is a short hand for a function expression and 
    not for function itself

    syntex - 1
    //Using More than one argumnet

    let variableName = (Arguments seperated by coma's) => {
       return //Code goes here;
    }

    syntex - 2
    //Using no argument

    let variableName = () => {
       return //Code goes here;
    }

    syntex - 3
    //Using single argument

    let variableName = argumentName => {
       return //Code goes here;
    }

    Syntex - 4
    //Implicitely Return
    //-> Instead of writing return statement in the function we replace curly
    //->braces with a round brackets

    let variableName = () => (
        //Code goes here    <- Statement should not end with a colon
    )



    Syntex - 5
    //Implicitely Return

    let variableName = () => code to be executed
*/


/*
let add = (x,y) => {
    return x + y ;
}

add(2,5);
7
*/


/*
let rollDice = () => {
    return Math.floor(Math.random()*6)+1;
}

rollDice()
6
rollDice()
2

*/


/*
rollDice = () => (
    Math.floor(Math.random()*6+1)
)

rollDice()
2

rollDice()
2

rollDice()
5
*/

/*
let multiply = (x,y) => x*y

multiply(2,3)
6

*/


/*
let movies = [
    {
        title : 'romeo',
        rating : '96'
    },
    {
        title : 'and',
        rating : '54'
    },
    {
        title : 'july',
        rating : '99'
    }
]

let newMovies = movies.map((movie) => `${movie.title}-${movie.rating/10}`)

newMovies
['romeo-9.6', 'and-5.4', 'july-9.9']
*/