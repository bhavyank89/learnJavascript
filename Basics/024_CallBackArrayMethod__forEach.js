//---------- Call back array method - forEach() ------------------

/*
    ->This an array method to itterate each element of an array
    ->argument of for each is a function
    ->forEach() call the function passed as an argumnet in it

    
    arrayName.forEach(
        function(element){
            //here goes your code
        }
    )

*/


/*

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (arrayElement) {
    console.log(`Array contain ${arrayElement}`);
})


Array contain 0
Array contain 1
Array contain 1
Array contain 1
Array contain 1
Array contain 2
Array contain 2
Array contain 2
Array contain 2
Array contain 3
Array contain 3
Array contain 3
Array contain 3
Array contain 4
Array contain 5
Array contain 6
Array contain 7
Array contain 8
Array contain 9
Array contain 10
Array contain 11
Array contain 12
Array contain 13
Array contain 14
Array contain 15
Array contain 16
Array contain 17
Array contain 18
Array contain 19
Array contain 20

*/


/*
const Movies = [
    {
        title: 'DamanTheSaw',
        rating: 95
    },
    {
        title: 'NewEra',
        rating: 89
    },
    {
        title: 'ColdWar',
        rating: 92
    },
    {
        title: 'TheNights',
        rating: 96
    }
]

Movies.forEach(function (moviesRating) {
    console.log(`${moviesRating.title} - ${moviesRating.rating}/100`);
})

DamanTheSaw - 95/100
NewEra - 89/100
ColdWar - 92/100
TheNights - 96/100
*/