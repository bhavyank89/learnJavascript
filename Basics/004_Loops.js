// Loops

/*
------------------ For Loop ----------------------------------

    syntex

    //This loop run until the terminating condition is true

        for (initial condition ; terminating condition ; updating initial condition) {
            //You code goes here;
        }

    e.x,
    //Printing No From 1 to 10 in asscending order
        for (let i=1 ; i<=10 ; i++) {
            console.log(i);
        }

    //Printing No From 1 to 10 in descending order
        for (let i=10 ; i>=0 ; i--) {
            console.log(i);
        }

    //Printing even number's from 1 to 10
        for (let i=0 ; i<=10 ; i+=2) {
            console.log(i);
        }

    //Printing odd number's from 1 to 10
        for (let i=1 ; i<=10 ; i+=2) {
            console.log(i);
        }

    //Printing an array
        const color = ['red','orange','yellow'];

        for (let i=0 ; i<color.length ; i++) {
            console.log(color[i]);
        }
*/

/*

-------------------- While Loop --------------------------------------

        syntex

        //This loop run until the terminating condition is true

            let count = 0;          //Initial Condition
            while (terminating condition) {
                //You code goes here;

                count++;            //Updating initial condition
            }

            e.x,

            const secretCode = "greatCode";

            let guess = prompt("Guess the code");
             while(guess !== secretCode) {
                let guess = prompt("Guess the code");
             }

             console.log("Congrates you got the code");


*/

//----------------------- Nested Loop ---------------------------
/*
        let str = 'LOL';
        for (let i=0 ; i<=4 ; i++) {
            
            console.log('Outer ',i);

            for(let j=0 ; j<str.length ; j++) {
                console.log('   Inner=',str[j]);
            }
        }

*/