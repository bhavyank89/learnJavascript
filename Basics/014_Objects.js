// Learning Objects

//----------------- Creating Objects ------------------------------------------

/*

    Objects in javascript is similar to that of structure in C language
    Objects is the collection of different key-value pair
    an array is also an object

    e.x,
            const fitbitdata {                              //fitbitdata --> object
                totalsteps : 12033,                         //totalsteps --> key , 12033 --> value
                totalcalories : 544,                        //totalcalories --> key , 544 --> value
                totalmiles : 12.54,                         //totalmiles --> key , 12.54 --> value
                workoutinweek : '5 out of 7',               //workoutinweek --> key , '5 out of 7' --> value
                color : ['red','crimson'],
            }

    In Object every key is convert into string except symbols
    e.x,
            const year = {
            2003 : 'Good',
            2020 : 'Bad',
            }
            undefined

            year
            {2003: 'Good', 2020: 'Bad'}

            year[2003];
            'Good'

            year['2003'];
            'Good'


*/

//----------------------- Accessing Objects -------------------------------------

/*



            const itIsObject = {
            firstName : 'Bhavyank',
            lastName : 'Sarolia',
            rollNumber : 'BT22ECE076',
            course : 'ECE',
            AIR : 32636,
            }
            undefined

            itIsObject
            {firstName: 'Bhavyank', lastName: 'Sarolia', rollNumber: 'BT22ECE076', course: 'ECE', AIR: 32636}


    Syntex one
            itIsObject['lastName']; //Accesing value using key
            'Sarolia'

    Syntex Two
            itIsObject.lastName //Accesing value using key
            'Sarolia'

    Syntax Three
            let rank = "AIR";
            itIsObject[rank]; //Accesing Values using Variable
            32636
*/


//------------------- Updating An Object -----------------------------------------

/*

            const midterm = {
            john : 78 ,
            rahima : 95,
            }
            undefined

            midterm.['rahima'] = 98; //Updating value of a key in Object
            98

            midterm
            {john: 78, rahima: 98}

            midterm.alok = 85; //Adding a new key-value pair in object
            85

            midterm
            {john: 78, rahima: 98, alok: 85}


*/

//--------------------------- Nested Array and Object ----------------------------
/*

            const student = {
            firstName : 'David',
            lastName : 'Jones',
            strength : ['Music','Arts'] ,
            exams : {
                midTerm : 92,
                final : 88,
            }
            }
            undefined

            student.strength[0][3]
            'i'

            student.exams.midTerm
            92


*/

//--------------------------- Iterrating Object ----------------------------
/*

            const student = {
            firstName : 'David',
            lastName : 'Jones',
            strength : ['Music','Arts'] ,
            exams : {
                midTerm : 92,
                final : 88,
            }
            }
            undefined

            student.strength[0][3]
            'i'

            student.exams.midTerm
            92


*/