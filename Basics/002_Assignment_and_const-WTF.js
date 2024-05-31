/*
    Assignment operator for any data type other than an array
    check's for the value

    but, for an array it check's for the starting address

    e.x, in console
        1 === 1 //Give True as here === check's the value
        true

        'hello' == 'hello' //Give true as here == check's the value of the string
        true

        [1,2,3] === [1,2,3] //But for an array It check's the starting memory address
        false

    Here first array has some address in memory and second array has some different address in memory
    hence, the result if false

        let name = ['Bhavyank','Sarolia']; //This is a new array
        undefined

        let nameCopy = name; //This is not a new array but a array name pointing to the same memory address as that of name
        undefined

        name
        ['Bhavyank', 'Sarolia']

        nameCopy
        ['Bhavyank', 'Sarolia']

        nameCopy === name; //Both are poinitng towards same memory address hence the result is true
        true

*/

// Similarly goes for Const

/*
    const pi = 3.141519;
    undefined

    pi = pi + 1 ; //Connot change the value of the variable and string with type of constant it gives error
    VM1725:1 Uncaught TypeError: Assignment to constant variable.       at <anonymous>:1:4

    but, for an array we can change the element in the array 
        until the starting address is not changed

    const nums = [1,2,3];
    undefined

    nums.push(4);
    4

    nums
    [1, 2, 3, 4]

    nums.pop()
    4

    nums
    [1, 2, 3]

    nums = ['a','b','c'];
    VM1935:1 Uncaught TypeError: Assignment to constant variable.    at <anonymous>:1:6
*/